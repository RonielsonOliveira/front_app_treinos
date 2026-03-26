import * as types from "../types.js";

const initialState = {
  isAuthenticated: false,
  token: null,
  user: null,
  role: null,
  isLoading: false,
  isLoggedIn: false,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true, // ✅ UM NOME SÓ
        token: action.payload.token,
        user: action.payload.user,
        role: action.payload.role,
        isLoggedIn: true,
      };

    case types.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        token: null,
        user: null,
        role: null,
      };

    case types.LOGOUT:
      return {
        ...initialState,
      };

    case types.CLEAR_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };

    default:
      return state;
  }
}
