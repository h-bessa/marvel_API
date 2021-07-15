import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GetSuperHeroListTotal } from "../actions/SuperHeroAction";
import { Autocomplete, List, ListItem, Size, Icon } from "@lumx/react";
import { mdiTextBoxSearch } from "@lumx/icons";
import "../Styles/SuperHeroListTotal.css";

function SuperHeroListTotal(props) {
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const superHeroListTotal = useSelector((state) => state.SuperHeroListTotal); //liste totale
  const superHeroListData = superHeroListTotal.data;

  const fetchDataTotal = () => {
    dispatch(GetSuperHeroListTotal());
  };

  useEffect(() => {
    fetchDataTotal();
  }, []);

  const filteredHero = superHeroListData?.results?.filter((hero) => {
    const noSpacesHero = hero?.name?.replace(" ", "").toLowerCase();
    return noSpacesHero?.includes(search.replace(" ", "").toLowerCase());
  });

  const closeAutocomplete = () => setShowSuggestions(false);

  const setSelectedHero = (hero) => {
    setSearch(hero.name);
    setShowSuggestions(false);
    props.props.history.push(`/superhero/${hero?.name}`);
  };

  const onChange = (value) => {
    setSearch(value);
    setShowSuggestions(value?.length > 0);
  };

  const { activeItemIndex } = List.useKeyboardListNavigation(
    filteredHero,
    inputRef,
    setSelectedHero
  );

  const onFocus = () => {
    setShowSuggestions(search?.length > 0);
  };

  const hasSuggestions = filteredHero?.length > 0;

  return (
    <div className="section">
      <Link to={"/"}>
        <img
          className="logo"
          src="https://cdn.1min30.com/wp-content/uploads/2018/07/Logo-Marvel.png"
        />
      </Link>
      <div className="searchbar">
        <Link to={"/"}>
          <Icon className="icon" icon={mdiTextBoxSearch} size={Size.l} />
        </Link>
        <Autocomplete
          placeholder="Man"
          theme="light"
          isOpen={showSuggestions && hasSuggestions}
          onClose={closeAutocomplete}
          value={search}
          onChange={onChange}
          onFocus={onFocus}
          inputRef={inputRef}
        >
          <List>
            {filteredHero?.map((hero, index) => {
              const onItemSelected = () => setSelectedHero(hero);
              return (
                <ListItem
                  size={Size.tiny}
                  key={hero.id}
                  isHighlighted={index === activeItemIndex}
                  onItemSelected={onItemSelected}
                >
                  <div>{hero.name}</div>
                </ListItem>
              );
            })}
          </List>
        </Autocomplete>
      </div>
    </div>
  );
}

export default SuperHeroListTotal;
