import axios from "axios";

const API_PUBLIC_KEY = process.env.REACT_APP_MARVEL_API_KEY;


export const GetSuperHeroList = (page) => async dispatch => {
    try{
        dispatch({
            type: "SUPERHERO_LIST_LOADING"
        });

        const perPage = 4
        const offset = (page * perPage) - perPage

        const res = await axios.get(`http://gateway.marvel.com/v1/public/characters?ts=1&limit=4&offset=${offset}&apikey=${API_PUBLIC_KEY}&hash=9e8a72e0ca0b5ce6e1c5c86609eb99d6`)
        
        dispatch({
            type: "SUPERHERO_LIST_SUCCESS",
            payload: res.data
        })
    } catch (err){
        dispatch({
            type: "SUPERHERO_LIST_FAIL",
        })
    }
};

export const GetSuperHeroListTotal = () => async dispatch => {
    try{
        dispatch({
            type: "SUPERHERO_LIST_TOTAL_LOADING"
        });

        const res = await axios.get(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${API_PUBLIC_KEY}&hash=9e8a72e0ca0b5ce6e1c5c86609eb99d6`)
        
        dispatch({
            type: "SUPERHERO_LIST_TOTAL_SUCCESS",
            payload: res.data
        })
    } catch (err){
        dispatch({
            type: "SUPERHERO_LIST_TOTAL_FAIL",
        })
    }
};

export const GetSuperHero = (superheroName) => async dispatch => {
    try{
        dispatch({
            type: "SUPERHERO_MULTIPLE_LOADING"
        });

        const res = await axios.get(`http://gateway.marvel.com/v1/public/characters?ts=1&name=${superheroName}&apikey=${API_PUBLIC_KEY}&hash=9e8a72e0ca0b5ce6e1c5c86609eb99d6
`)
        
        dispatch({
            type: "SUPERHERO_MULTIPLE_SUCCESS",
            payload: res.data,
            superheroName: superheroName
        })
    } catch (err){
        dispatch({
            type: "SUPERHERO_MULTIPLE_FAIL",
        })
    }

}

export const GetHeroComics = (superheroId) => async dispatch => {
    try{
        dispatch({
            type: "SUPERHERO_COMICS_LIST_LOADING"
        });

        const res = await axios.get(`http://gateway.marvel.com/v1/public/characters/${superheroId}/comics?ts=1&limit=4&apikey=${API_PUBLIC_KEY}&hash=9e8a72e0ca0b5ce6e1c5c86609eb99d6`)
        
        dispatch({
            type: "SUPERHERO_COMICS_LIST_SUCCESS",
            payload: res,
            superheroId: superheroId
        })
    } catch (err){
        dispatch({
            type: "SUPERHERO_COMICS_LIST_FAIL",
        })
    }

}