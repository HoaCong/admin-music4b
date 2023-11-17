import axios from "axios";
import { all, call, put, takeLeading } from "redux-saga/effects";
import {
  actionGetListFailed,
  actionGetListSuccess,
} from "store/Category/action";
import * as ActionTypes from "./constant";
function* callApiListCategory() {
  try {
    const response = yield call(() =>
      axios.get(process.env.REACT_APP_BASE_URL + "/getcategory.php")
    );
    if (response.status === 200) {
      yield put(actionGetListSuccess(response.data));
    }
  } catch (error) {
    yield put(actionGetListFailed(error.response));
  }
}
export default function* categorySaga() {
  yield all([yield takeLeading(ActionTypes.LIST, callApiListCategory)]);
}
