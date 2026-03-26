import React from "react";
import { Routes, Route } from "react-router-dom";
import MyRoute from "./MyRoute.js";

import Login from "../pages/Login/Index.js";
import Register from "../pages/Register/Index.js";

import Exercicio from "../pages/Exercicio/Index.js";
import Exercicios from "../pages/Exercicios/Index.js";

import Treino from "../pages/Treino/Index.js";
import Treinos from "../pages/Treinos/Index.js";

import Aluno from "../pages/Aluno/Index.js";
import AlunoTreinos from "../pages/MeusTreinos/Index.js";

import Fotos from "../pages/Fotos/Index.js";
import Page404 from "../pages/Page404/index.js";

export default function AppRoutes() {
  return (
    <Routes>
      {/* HOME */}
      <Route
        exact
        path="/"
        element={<MyRoute component={Exercicios} isClosed />}
      />

      {/* EXERCÍCIOS */}
      <Route
        exact
        path="/exercicio"
        element={<MyRoute component={Exercicio} isClosed />}
      />
      <Route
        exact
        path="/exercicio/:id/edit"
        element={<MyRoute component={Exercicio} isClosed />}
      />

      {/* TREINOS */}
      <Route
        exact
        path="/treinos"
        element={<MyRoute component={Treinos} isClosed />}
      />
      <Route
        exact
        path="/treino"
        element={<MyRoute component={Treino} isClosed />}
      />
      <Route
        exact
        path="/treino/:id/edit"
        element={<MyRoute component={Treino} isClosed />}
      />

      <Route
        exact
        path="/aluno"
        element={<MyRoute component={Aluno} isClosed />}
      />
      <Route
        exact
        path="/aluno/:id/edit"
        element={<MyRoute component={Aluno} isClosed />}
      />

      {/* AUTENTICAÇÃO */}
      <Route
        exact
        path="/register"
        element={<MyRoute component={Register} />}
      />
      <Route exact path="/login" element={<MyRoute component={Login} />} />

      {/* FOTOS */}
      <Route
        exact
        path="/fotos/:id"
        element={<MyRoute component={Fotos} isClosed />}
      />
      <Route
        exact
        path="/me/treinos"
        element={<MyRoute component={AlunoTreinos} isClosed />}
      />

      {/* 404 */}
      <Route exact path="*" element={<MyRoute component={Page404} />} />
    </Routes>
  );
}
