import axios from "axios";
import { ENDPOINT } from "constants/routerApi";
import { all, call, put, takeLatest, takeLeading } from "redux-saga/effects";
import { addToast } from "store/Toast/action";
import {
  actionActiveFailed,
  actionActiveSuccess,
  actionGetListFailed,
  actionGetListSuccess,
} from "./action";
import * as ActionTypes from "./constant";
function* callApiList() {
  try {
    const response = yield call(() =>
      axios.get("http://localhost:3101/listuser")
    );
    if (+response.data.success) {
      yield put(actionGetListSuccess(response.data.user_details.user_details));
    }
  } catch (error) {
    yield put(actionGetListFailed(error.response.data));
  }
}

function* callApiActive({ data }) {
  try {
    const response = yield call(() =>
      axios.post("http://localhost:3101/activeuserphp", {
        username: data.UserName,
        active: +!+data.active,
      })
    );
    if (+response.data.success) {
      yield put(actionActiveSuccess(data));
      yield put(
        addToast({
          text: "Cập nhật thành công",
          type: "success",
          title: "",
        })
      );
    }
  } catch (error) {
    yield put(actionActiveFailed(error.response.data.error));
    yield put(
      addToast({
        text: "Cập nhật thất bại",
        type: "danger",
        title: "",
      })
    );
  }
}

export default function* userSaga() {
  yield all([
    yield takeLeading(ActionTypes.LIST, callApiList),
    yield takeLatest(ActionTypes.ACTIVE, callApiActive),
  ]);
}
