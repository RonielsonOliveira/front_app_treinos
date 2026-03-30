import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { isEmail } from "validator";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container } from "../../styles/GlobalStyles";

import { Form, Title } from "./styled.js";
import Loading from "../../components/Loading/index.js";
import * as actions from "../../store/modules/auth/actions.js";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const createdSuccess = useSelector((state) => state.auth.createdSuccess);

  const id = user?.id || null;
  const nomeStored = user?.nome || "";
  const emailStored = user?.email || "";

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (!id) return;
    setNome(nomeStored || "");
    setEmail(emailStored || "");
  }, [id, nomeStored, emailStored]);

  useEffect(() => {
    if (createdSuccess && !id) {
      navigate("/login");
      dispatch(actions.clearRegisterSuccess());
    }
  }, [createdSuccess, id, navigate, dispatch]);

  function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if (nome.length < 3 || nome.length > 255) {
      toast.error("Nome deve ter entre 3 e 255 caracteres");
      formErrors = true;
    }

    if (!isEmail(email)) {
      toast.error("Email inválido");
      formErrors = true;
    }

    if (!id && (password.length < 6 || password.length > 50)) {
      toast.error("Senha deve ter entre 6 e 50 caracteres");
      formErrors = true;
    }

    if (formErrors) return;

    dispatch(actions.registerRequest({ nome, email, password, id }));
  }

  return (
    <Container>
      <Title>{id ? "Editar dados" : "Crie a sua conta"}</Title>
      <Loading isLoading={isLoading} />
      <Form onSubmit={handleSubmit}>
        <label>Nome</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Seu nome"
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Seu email"
        />

        <label>Senha</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Sua senha"
        />

        <button type="submit">{id ? "Salvar" : "Criar conta"}</button>
      </Form>
    </Container>
  );
}
