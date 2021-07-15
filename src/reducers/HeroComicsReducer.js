const DefaultState = {
  loading: false,
  data: [],
  errorMessage: '',
};

const HeroComicsReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case "SUPERHERO_COMICS_LIST_LOADING":
      return {
        ...state,
        loading: true,
        errorMessage:""
      };
    case "SUPERHERO_COMICS_LIST_FAIL":
      return {
        ...state,
        loading: false,
        errorMessage: "Impossible d'afficher un comics"
      };
      case "SUPERHERO_COMICS_LIST_SUCCESS":
        return {
          ...state,
          loading: false,
          data: action.payload,
          errorMessage:"",
        };
    default:
      return state;
  }
};

export default HeroComicsReducer;
