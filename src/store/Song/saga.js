import axios from "axios";
import { parseFormData, parseSongItem } from "pages/ManageSong/helper";
import { all, call, put, takeLatest, takeLeading } from "redux-saga/effects";
import { addToast } from "store/Toast/action";
import {
  actionAddFailed,
  actionAddSuccess,
  actionDeleteFailed,
  actionDeleteSuccess,
  actionEditFailed,
  actionEditSuccess,
  actionGetListFailed,
  actionGetListSuccess,
} from "./action";
import * as ActionTypes from "./constant";
function* callApiList() {
  try {
    const response = yield call(() =>
      axios.get(process.env.REACT_APP_BASE_URL + "/danhsachbaihatadmin.php")
    );
    if (response.status === 200) {
      yield put(actionGetListSuccess(response.data.success));
    }
  } catch (error) {
    yield put(actionGetListFailed(error.response));
  }
}

function* callApiAdd({ formData }) {
  try {
    const response = yield call(() =>
      axios.post(
        process.env.REACT_APP_BASE_URL + "/insertbaihat.php",
        parseFormData(formData)
      )
    );
    if (response.status === 200) {
      console.log("function*callApiAdd  response:");
      yield put(
        actionAddSuccess(
          parseSongItem({ ...formData, idbaihat: response.data.id })
        )
      );
      yield put(
        addToast({
          text: "Cập nhật thành công",
          type: "success",
          title: "",
        })
      );
    }
  } catch (error) {
    yield put(actionAddFailed(error));
    yield put(
      addToast({
        text: "Cập nhật thất bại",
        type: "danger",
        title: "",
      })
    );
  }
}

function* callApiEdit({ formData }) {
  try {
    const response = yield call(() =>
      axios.post(
        process.env.REACT_APP_BASE_URL + "/updatebaihat.php",
        parseFormData(formData)
      )
    );
    if (response.status === 200) {
      yield put(actionEditSuccess(parseSongItem(formData)));
      yield put(
        addToast({
          text: "Cập nhật thành công",
          type: "success",
          title: "",
        })
      );
    }
  } catch (error) {
    yield put(actionEditFailed(error));
    yield put(
      addToast({
        text: "Cập nhật thất bại",
        type: "danger",
        title: "",
      })
    );
  }
}

function* callApiDelete({ id }) {
  try {
    const formData = new FormData();
    formData.append("idbaihat", id);
    const response = yield call(() =>
      axios.post(process.env.REACT_APP_BASE_URL + "/deletebaihat.php", formData)
    );
    if (response.status === 200) {
      yield put(actionDeleteSuccess(id));
      yield put(
        addToast({
          text: response.data.message,
          type: "success",
          title: "",
        })
      );
    }
  } catch (error) {
    yield put(actionDeleteFailed(error.response.data.error));
    yield put(
      addToast({
        text: "Update category failed",
        type: "danger",
        title: "",
      })
    );
  }
}

export default function* songSaga() {
  yield all([
    yield takeLeading(ActionTypes.LIST, callApiList),
    yield takeLatest(ActionTypes.ADD, callApiAdd),
    yield takeLatest(ActionTypes.EDIT, callApiEdit),
    yield takeLatest(ActionTypes.DELETE, callApiDelete),
  ]);
}
