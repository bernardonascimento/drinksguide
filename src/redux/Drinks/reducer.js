import {GETDRINKSBYCATEGORY, SEARCHDRINKS, GETDRINKBYID} from './type';

const INITIAL_STATE = {
  allDrinks: {
    drinks: [],
  },
  searchDrinks: {
    drinks: [],
  },
  current: {
    drinks: [],
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GETDRINKSBYCATEGORY:
      return {
        ...state,
        allDrinks: action.payload,
      };
    case SEARCHDRINKS:
      return {
        ...state,
        searchDrinks: action.payload,
      };
    case GETDRINKBYID:
      return {
        ...state,
        current: action.payload,
      };
    default:
      return state;
  }
};
