/* quy phạm khai báo rootReducer */
import { combineReducers } from "redux";

import categoryReducer from "./Category/reducer";
import loginReducer from "./Login/reducer";
import songReducer from "./Song/reducer";
import toastReducer from "./Toast/reducer";
import userReducer from "./User/reducer";
const rootReducer = combineReducers({
  loginReducer,
  toastReducer,
  userReducer,
  songReducer,
  categoryReducer,
});

export default rootReducer;
