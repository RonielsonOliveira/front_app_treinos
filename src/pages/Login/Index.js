import React from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { isEmail } from "validator";
import { useDispatch, useSelector } from "react-redux";
import { Form, Container, ImageLogin, LoginWrapper, Title } from "./styled";
import * as actions from "../../store/modules/auth/actions";
import Loading from "../../components/Loading";
import { useNavigate } from "react-router-dom";

import Imagem from "../../utils/Img/professor.jpg";

export default function Login() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [role, setRole] = React.useState("user");
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);
  function handleSubmit(e) {
    e.preventDefault();

    if (!isEmail(email)) {
      toast.error("Email inválido");
      return;
    }

    if (password.length < 6) {
      toast.error("Senha inválida");
      return;
    }

    dispatch(
      actions.loginRequest({
        email,
        password,
        role,
        prevPath: "/",
      })
    );
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <LoginWrapper>
        <ImageLogin>
          <img src={Imagem} />
        </ImageLogin>
        <Form onSubmit={handleSubmit}>
          <Title>Login</Title>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu email"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Sua senha"
          />

          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="user">Professor</option>
            <option value="aluno">Aluno</option>
          </select>

          <button type="submit">Acessar</button>
        </Form>
      </LoginWrapper>
    </Container>
  );
}
