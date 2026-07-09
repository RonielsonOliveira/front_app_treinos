import { call, put, all, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import axios from "../../../services/axios";
import history from "../../../services/history";
import * as actions from "./actions";
import * as types from "../types";

function* loginRequest({ payload }) {
  try {
    const { email, password, role, prevPath } = payload;

    const route = role === "aluno" ? "/tokens/aluno" : "/tokens";

    const body = { email, password };

    const response = yield call(axios.post, route, body);

    const { token, user, aluno } = response.data;

    yield put(
      actions.loginSuccess({
        token,
        user: user || aluno,
        role,
      })
    );

    axios.defaults.headers.Authorization = token;

    toast.success("Login realizado com sucesso");
  } catch (error) {
    console.log(error.response?.data);
    toast.error("Usuário ou senha inválidos");
    yield put(actions.loginFailure());
  }
}

function* persistRehydrate({ payload }) {
  const token = payload?.auth?.token;
  const user = payload?.auth?.user;
  if (!token || !user) return;

  axios.defaults.headers.Authorization = token;

  yield put(
    actions.loginSuccess({
      token,
      user,
      role: payload.auth.role,
    })
  );
}

function* registerRequest({ payload }) {
  try {
    const { nome, email, password } = payload;

    yield call(axios.post, "/users", {
      nome,
      email,
      password,
    });

    toast.success("Usuário criado com sucesso");

    yield put(actions.registerSuccess());
  } catch (error) {
    console.log(error.response?.data);
    toast.error("Erro ao criar usuário");
    yield put(actions.registerFailure());
  }
}

export default function* authSaga() {
  yield all([
    takeLatest(types.LOGIN_REQUEST, loginRequest),
    takeLatest(types.REGISTER_REQUEST, registerRequest),
    takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  ]);
}
