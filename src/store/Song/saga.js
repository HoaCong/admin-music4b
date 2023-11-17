import axios from "axios";
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
      axios.get(process.env.BE_API + "http://localhost:3101/listsong")
    );
    if (response.status === 200) {
      yield put(actionGetListSuccess(response.data.success));
    }
  } catch (error) {
    yield put(actionGetListFailed(error.response));
  }
}

// function* callApiAdd({ params }) {
//   try {
//     const response = yield call("post", ENDPOINT.ADD_CATEGORY, params);
//     yield put(actionAddSuccess(response.data.data));
//     yield put(
//       addToast({
//         text: response.data.message,
//         type: "success",
//         title: "",
//       })
//     );
//   } catch (error) {
//     yield put(actionAddFailed(error.response.data.error));
//     yield put(
//       addToast({
//         text: "Add category failed",
//         type: "danger",
//         title: "",
//       })
//     );
//   }
// }

// function* callApiEdit({ params }) {
//   try {
//     const { id, name, image } = params;
//     const response = yield call("puts", ENDPOINT.EDIT_CATEGORY + id, {
//       name,
//       image,
//     });
//     yield put(actionEditSuccess(response.data.data));
//     yield put(
//       addToast({
//         text: response.data.message,
//         type: "success",
//         title: "",
//       })
//     );
//   } catch (error) {
//     yield put(actionEditFailed(error.response.data.error));
//     yield put(
//       addToast({
//         text: "Update category failed",
//         type: "danger",
//         title: "",
//       })
//     );
//   }
// }

// function* callApiDelete({ id }) {
//   try {
//     const response = yield call("remove", ENDPOINT.DELETE_CATEGORY + id);
//     yield put(actionDeleteSuccess(id));
//     yield put(
//       addToast({
//         text: response.data.message,
//         type: "success",
//         title: "",
//       })
//     );
//   } catch (error) {
//     yield put(actionDeleteFailed(error.response.data.error));
//     yield put(
//       addToast({
//         text: "Update category failed",
//         type: "danger",
//         title: "",
//       })
//     );
//   }
// }

export default function* songSaga() {
  yield all([
    yield takeLeading(ActionTypes.LIST, callApiList),
    // yield takeLatest(ActionTypes.ADD, callApiAdd),
    // yield takeLatest(ActionTypes.EDIT, callApiEdit),
    // yield takeLatest(ActionTypes.DELETE, callApiDelete),
  ]);
}
