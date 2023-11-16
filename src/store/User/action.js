import * as ActionTypes from "./constant";

export const actionGetList = () => ({
  type: ActionTypes.LIST,
});

export const actionGetListSuccess = (payload) => ({
  type: ActionTypes.LIST_SUCCESS,
  payload,
});

export const actionGetListFailed = (error) => ({
  type: ActionTypes.LIST_FAILED,
  error,
});

export const actionActive = (data) => ({
  type: ActionTypes.ACTIVE,
  data,
});

export const actionActiveSuccess = (data) => ({
  type: ActionTypes.ACTIVE_SUCCESS,
  data,
});

export const actionActiveFailed = (error) => ({
  type: ActionTypes.ACTIVE_FAILED,
  error,
});

export const resetData = () => ({
  type: ActionTypes.RESET_DATA,
});
