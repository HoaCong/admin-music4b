import produce from "immer";
import * as ActionTypes from "./constant";

// DEFAULT STATE
const status = { isLoading: false, isSuccess: false, isFailure: false };
const initialState = {
  loginStatus: {
    ...status,
  },
  registerStatus: {
    ...status,
  },
  data: {
    user_details: JSON.parse(localStorage.getItem("user_details")) || {},
    error: "",
  },
};

const loginReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.LOGIN:
        draft.loginStatus.isLoading = true;
        draft.loginStatus.isSuccess = false;
        draft.loginStatus.isFailure = false;
        break;

      case ActionTypes.LOGIN_SUCCESS:
        draft.loginStatus.isLoading = false;
        draft.loginStatus.isSuccess = true;
        draft.data = action.payload;
        break;

      case ActionTypes.LOGIN_FAILED:
        draft.loginStatus.isLoading = false;
        draft.loginStatus.isFailure = true;
        draft.data = {
          user_details: {},
          error: "Email or password invalid",
        };
        break;

      case ActionTypes.LOGOUT: {
        localStorage.removeItem("user_details");
        draft.loginStatus = { ...status };
        draft.data = {
          user_details: {},
          user: {},
        };
        localStorage.removeItem("user_details");
        break;
      }

      default:
        return state;
    }
  });
};

export default loginReducer;
