import { combineReducers } from "redux";
import SuperHeroListReducer from "./SuperHeroListReducer";
import SuperHeroMultipleReducer from "./SuperHeroMultipleReducer";
import SuperHeroListTotalReducer from "./SuperHeroListTotalReducer";
import HeroComicsReducer from "./HeroComicsReducer";

const rootReducer = combineReducers(
    {
        SuperHeroList: SuperHeroListReducer,
        SuperHero: SuperHeroMultipleReducer,
        SuperHeroListTotal : SuperHeroListTotalReducer,
        HeroComics: HeroComicsReducer

    }
)

export default rootReducer;