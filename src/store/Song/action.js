import * as ActionTypes from "./constant";

export const actionGetList = (params = null) => ({
  type: ActionTypes.LIST,
  params,
});

export const actionGetListSuccess = (payload) => ({
  type: ActionTypes.LIST_SUCCESS,
  payload,
});

export const actionGetListFailed = (error) => ({
  type: ActionTypes.LIST_FAILED,
  error,
});

export const actionAdd = (formData) => ({
  type: ActionTypes.ADD,
  formData,
});

export const actionAddSuccess = (payload) => ({
  type: ActionTypes.ADD_SUCCESS,
  payload,
});

export const actionAddFailed = (error) => ({
  type: ActionTypes.ADD_FAILED,
  error,
});

export const actionEdit = (formData) => ({
  type: ActionTypes.EDIT,
  formData,
});

export const actionEditSuccess = (payload) => ({
  type: ActionTypes.EDIT_SUCCESS,
  payload,
});

export const actionEditFailed = (error) => ({
  type: ActionTypes.EDIT_FAILED,
  error,
});

export const actionDelete = (id) => ({
  type: ActionTypes.DELETE,
  id,
});

export const actionDeleteSuccess = (id) => ({
  type: ActionTypes.DELETE_SUCCESS,
  id,
});

export const actionDeleteFailed = (error) => ({
  type: ActionTypes.DELETE_FAILED,
  error,
});

export const resetData = () => ({
  type: ActionTypes.RESET_DATA,
});
