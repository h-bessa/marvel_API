import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetSuperHero } from "../actions/SuperHeroAction";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import SuperHeroListTotal from "./SuperHeroListTotal";
import HeroComics from "./HeroComics";
import HeroComicsImg from "./HeroComicsImg";
import _ from "lodash";
import "../Styles/SuperHero.css";

const SuperHero = (props) => {
  const superHeroName = props.match.params.superhero;
  const dispatch = useDispatch();
  const superHeroState = useSelector((state) => state.SuperHero);
  const superHeroId = superHeroState?.data[superHeroName]?.id;

  useEffect(() => {
    dispatch(GetSuperHero(superHeroName));
  }, []);

  const showData = () => {
    if (!_.isEmpty(superHeroState.data[superHeroName])) {
      const superheroData = superHeroState.data[superHeroName];
      const superHeroImg =
        superheroData.thumbnail.path + "." + superheroData.thumbnail.extension;
      const superheroDescription = superheroData.description;
      return (
        <>
          <div className="container-2">
            <Row>
              <Col className="left-col" sm={9}>
                <div className="infos">
                  <Link to={"/"}>
                    <a>Back to results</a>
                  </Link>
                  <h1>{superHeroName}</h1>
                  <p>{superheroDescription}</p>
                </div>
              </Col>
              <Col className="right-col" sm={3}>
                <div className="picture">
                  <img alt="img" src={superHeroImg}></img>
                </div>
              </Col>
            </Row>

            <Row className="second-part">
              <Col className="free" sm={9}>
                <HeroComicsImg id={superHeroId} />
              </Col>
              <Col className="stats" sm={3}>
                <h2>Lastest Comics</h2>
                <HeroComics id={superHeroId} />
                <h4></h4>
              </Col>
            </Row>
          </div>
        </>
      );
    }
    if (superHeroState.loading) {
      return <p>loading</p>;
    }
    if (superHeroState.errMessage !== "") {
      return <p>{superHeroState.errMessage}</p>;
    }

    return <p>error getting superheor</p>;
  };

  return (
    <div>
      <SuperHeroListTotal props={props} />
      {showData()}
    </div>
  );
};

export default SuperHero;
