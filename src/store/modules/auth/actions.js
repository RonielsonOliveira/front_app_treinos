import * as types from "../types.js";

export function loginRequest(payload) {
  return {
    type: types.LOGIN_REQUEST,
    payload,
  };
}

export function loginSuccess(payload) {
  return {
    type: types.LOGIN_SUCCESS,
    payload,
  };
}

export function loginFailure() {
  return {
    type: types.LOGIN_FAILURE,
  };
}

export function logout() {
  return {
    type: types.LOGOUT,
  };
}

export function clearLoginSuccess() {
  return {
    type: types.CLEAR_LOGIN_SUCCESS,
  };
}

export function registerRequest(payload) {
  return {
    type: types.REGISTER_REQUEST,
    payload,
  };
}
export function registerUpdatedSuccess(payload) {
  return {
    type: types.REGISTER_UPDATED_SUCCESS,
    payload,
  };
}
export function registerCreatedSuccess(payload) {
  return {
    type: types.REGISTER_CREATED_SUCCESS,
    payload,
  };
}
export function registerFailure(payload) {
  return {
    type: types.REGISTER_FAILURE,
    payload,
  };
}
export function clearRegisterSuccess() {
  return {
    type: types.CLEAR_REGISTER_SUCCESS,
  };
}
