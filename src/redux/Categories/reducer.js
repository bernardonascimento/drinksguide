import {GETCATEGORY} from './type';

const INITIAL_STATE = {
  allCategories: {
    drinks: [],
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GETCATEGORY:
      return {
        ...state,
        allCategories: action.payload,
      };
    default:
      return state;
  }
};
