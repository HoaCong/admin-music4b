/* quy phạm khai báo Saga */
import { all, fork } from "redux-saga/effects";
import categorySaga from "./Category/saga";
import loginSaga from "./Login/saga";
import songSaga from "./Song/saga";
import userSaga from "./User/saga";
export default function* rootSaga() {
  yield all([
    fork(loginSaga),
    fork(userSaga),
    fork(songSaga),
    fork(categorySaga),
  ]);
}
