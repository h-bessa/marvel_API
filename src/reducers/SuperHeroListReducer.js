const DefaultState = {
  loading: false,
  data: [],
  errorMessage: '',
  count: 0
};

const SuperHeroListReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case "SUPERHERO_LIST_LOADING":
      return {
        ...state,
        loading: true,
        errorMessage:""
      };
    case "SUPERHERO_LIST_FAIL":
      return {
        ...state,
        loading: false,
        errorMessage: "Impossible d'afficher un superhero"
      };
      case "SUPERHERO_LIST_SUCCESS":
        return {
          ...state,
          loading: false,
          data: action.payload.data,
          errorMessage:"",
          count: action.payload.count
        };
    default:
      return state;
  }
};

export default SuperHeroListReducer;
