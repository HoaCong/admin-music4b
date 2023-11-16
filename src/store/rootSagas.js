/* quy phạm khai báo Saga */
import { all, fork } from "redux-saga/effects";
import loginSaga from "./Login/saga";
import userSaga from "./User/saga";
export default function* rootSaga() {
  yield all([
    fork(loginSaga),
    fork(userSaga),
    //
  ]);
}
