import axios from "axios";
import { all, call, put, takeLeading } from "redux-saga/effects";
import { actionLoginFailed, actionLoginSuccess } from "./action";
import * as ActionTypes from "./constant";

function* callApiLogin({ formData }) {
  try {
    const response = yield call(() =>
      axios.post(
        process.env.REACT_APP_BASE_URL + "/dangnhapadmin.php",
        formData,
        {}
      )
    );

    if (+response.data.success) {
      localStorage.setItem(
        "user_details",
        JSON.stringify(response.data.user_details.user_details[0])
      );
      yield put(
        actionLoginSuccess({
          user_details: response.data.user_details.user_details[0],
        })
      );
    } else yield put(actionLoginFailed(response.data));
  } catch (error) {
    yield put(actionLoginFailed(error));
  }
}

export default function* loginSaga() {
  yield all([yield takeLeading(ActionTypes.LOGIN, callApiLogin)]);
}
