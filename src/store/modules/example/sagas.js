import { call, put, all, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import * as actions from './actions.js'
import * as types from '../types.js'

const requisicao = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 600)
  })

function* exampleRequest() {
  try {
    yield call(requisicao)
    yield put(actions.clicaBotaoSuccess())
    toast.success('Deu certo.')
  } catch {
    yield put(actions.clicaBotaoFailure())
  }
}

export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)])
