import {GETDRINKSBYCATEGORY} from './type';

const INITIAL_STATE = {
  allDrinks: {
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
    default:
      return state;
  }
};
