import * as types from "../types.js";

const initialState = {
  botaoClicado: false,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      console.log("sucesso");
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      console.log("Estou ouvindo BOTAO_CLICADO");
      return newState;
    }
    case types.BOTAO_CLICADO_FAILURE: {
      console.log("deu erro");
      return state;
    }
    case types.BOTAO_CLICADO_REQUEST: {
      console.log("estou fazendo a requisicao");
      return state;
    }

    default: {
      return state;
    }
  }
}
