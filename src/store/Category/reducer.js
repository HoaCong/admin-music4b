import produce from "immer";
import * as ActionTypes from "./constant";

// DEFAULT STATE
const initialState = {
  category: {},
  isLoading: false,
  isSuccess: false,
  isFailure: false,
};

const categoryReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.LIST:
        draft.isLoading = true;
        draft.isSuccess = false;
        draft.isFailure = false;
        break;

      case ActionTypes.LIST_SUCCESS:
        draft.isLoading = false;
        draft.isSuccess = true;
        draft.category = action.payload;
        break;

      case ActionTypes.LIST_FAILED:
        draft.isLoading = false;
        draft.isFailure = true;
        draft.category = {};
        break;

      case ActionTypes.RESET_DATA:
        return initialState;

      default:
        return state;
    }
  });
};

export default categoryReducer;
