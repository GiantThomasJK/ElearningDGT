import produce from "immer";
import { actionTypes } from "./courseAction";

const initialState = {
  courses: null,
  categories: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CATEGORIES: {
      return produce(state, (draft) => {
        draft.categories = action.payload;
      });
    }

    case actionTypes.SET_COURSES: {
      return produce(state, (draft) => {
        draft.courses = action.payload;
      });
    }

    default:
      return state;
  }
};

export default reducer;
