import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetSuperHeroList } from "../actions/SuperHeroAction";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import SuperHeroListTotal from "./SuperHeroListTotal";
import _ from "lodash";
import "../Styles/SuperHeroList.css";

function SuperHeroList(props) {
  const dispatch = useDispatch();
  const superHeroList = useSelector((state) => state.SuperHeroList); //liste totale
  const superHeroListData = superHeroList.data;

  useEffect(() => {
    fetchData(1);
  }, []);

  const fetchData = (page = 1) => {
    dispatch(GetSuperHeroList(page));
  };

  const showData = () => {
    if (!_.isEmpty(superHeroListData)) {
      return superHeroListData.results.map((el) => {
        let superHeroImg = el.thumbnail.path + "." + el.thumbnail.extension;

        return (
          <div className="list-wrapper">
            <div className="superhero-item">
              <div className="thumbnail">
                <img alt="img" src={superHeroImg} className="img" />
              </div>
              <div className="content-list">
                <h1>{el.name}</h1>
                <p>{el.description}</p>
                <button className="btn">
                  <Link to={`/superhero/${el.name}`}> See details </Link>
                </button>
              </div>
            </div>
          </div>
        );
      });
    }
    if (superHeroList.loading) {
      return <p>Loading</p>;
    }

    if (superHeroList.error !== "") {
      return <p>{superHeroList.error}</p>;
    }

    return <p>unable to get data</p>;
  };

  return (
    <div>
      <SuperHeroListTotal props={props} />
      {showData()}
      {!_.isEmpty(superHeroListData) && (
        <ReactPaginate
          pageCount={Math.ceil(superHeroList.data.total / 4)}
          pageRangeDisplayed={2}
          marginPagesDisplayed={3}
          onPageChange={(data) => fetchData(data.selected + 1)}
          containerClassName="pagination"
        />
      )}
    </div>
  );
}

export default SuperHeroList;
