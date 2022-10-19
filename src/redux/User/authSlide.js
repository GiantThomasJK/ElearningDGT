import produce from "immer";
import { ADD_USER } from "./authAction";


const initialState = {
    users: null,
    userDetail: null,
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_USER: {
        return produce(state, (draft) => {
          draft.users = action.payload;
        });
      }

      default:
        return state;
    }
  };

  export default reducer;
