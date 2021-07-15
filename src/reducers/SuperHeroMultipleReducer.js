const DefaultState = {
  loading: false,
  data: {},
  errorMessage: "",
};

const SuperHeroMultipleReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case "SUPERHERO_MULTIPLE_LOADING":
      return {
        ...state,
        loading: true,
        errorMessage: "",
      };
    case "SUPERHERO_MULTIPLE_FAIL":
      return {
        ...state,
        loading: true,
        errorMessage: "Unable to find hero",
      };
    case "SUPERHERO_MULTIPLE_SUCCESS":
      return {
        ...state,
        loading: false,
        errorMessage: "",
        data: {
          ...state.data, //copy réelle de data car le spread operator de state ne fait juste qu'une reference
          [action.payload.data.results[0].name]: action.payload.data.results[0],
        },
      };
    default:
      return state;
  }
};

export default SuperHeroMultipleReducer;
