import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetHeroComics } from "../actions/SuperHeroAction";
import moment from "moment";
import "../Styles/SuperHero.css";
import _ from "lodash";
import "../Styles/SuperHero.css";

const HeroComics = (props) => {
  const dispatch = useDispatch();
  const HeroComics = useSelector((state) => state.HeroComics);
  const results = HeroComics?.data?.data?.data?.results;

  useEffect(() => {
    dispatch(GetHeroComics(props.id));
  }, []);

  const date = (date) => {
    var newd = moment.parseZone(date).format("DD-MMM-YY");
    return newd;
  };

  return (
    <div className="lastest_comics">
      {results &&
        results.map((item, i) => (
          <div className="stats-infos">
            <h4 key={i}>{item.title}</h4>
            <p key={i}>On sale: {date(item.dates[0].date)}</p>
            <p key={i}> Price: {item.prices[0].price}</p>
          </div>
        ))}
    </div>
  );
};

export default HeroComics;
