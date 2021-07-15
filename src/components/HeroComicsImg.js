import React from "react";
import { useSelector } from "react-redux";
import "../Styles/SuperHero.css";

const HeroComicsImg = () => {
  const HeroComics = useSelector((state) => state.HeroComics);
  const results = HeroComics?.data?.data?.data?.results;

  return (
    <div className="lastest_comics">
      {results &&
        results.map((item, i) => (
          <div className="stats-infos">
            <h3 key={i}>
              Others characters:
              {item.characters.items.map((perso) => (
                <p>{perso.name}</p>
              ))}
            </h3>
          </div>
        ))}
    </div>
  );
};

export default HeroComicsImg;
