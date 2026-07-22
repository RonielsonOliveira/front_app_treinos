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
import Alunos from "../pages/Alunos/index.js";
import TreinosAluno from "../pages/TreinoAlunos/Index.js";
import Home from "../pages/Home/index.js";
import Dashboard from "../pages/Dashboard/index.js";

export default function AppRoutes() {
  return (
    <Routes>
      {/* HOME */}
      <Route path="/" element={<MyRoute component={Home} isClosed />} />

      {/* EXERCÍCIOS */}
      <Route
        exact
        path="/exercicio"
        element={<MyRoute component={Exercicio} isClosed professorOnly />}
      />
      <Route
        exact
        path="/exercicios"
        element={<MyRoute component={Exercicios} isClosed professorOnly />}
      />
      <Route
        exact
        path="/exercicio/:id/edit"
        element={<MyRoute component={Exercicio} isClosed professorOnly />}
      />

      {/* TREINOS */}
      <Route
        exact
        path="/treinos"
        element={<MyRoute component={Treinos} isClosed professorOnly />}
      />
      <Route
        path="/alunos/:alunoId/treinos"
        element={<MyRoute component={TreinosAluno} isClosed professorOnly />}
      />
      <Route
        exact
        path="/treino"
        element={<MyRoute component={Treino} isClosed professorOnly />}
      />
      <Route
        exact
        path="/treino/:id/edit"
        element={<MyRoute component={Treino} isClosed professorOnly />}
      />

      <Route
        exact
        path="/aluno"
        element={<MyRoute component={Aluno} isClosed professorOnly />}
      />
      <Route
        exact
        path="/alunos"
        element={<MyRoute component={Alunos} isClosed professorOnly />}
      />
      <Route
        exact
        path="/aluno/:id/edit"
        element={<MyRoute component={Aluno} isClosed professorOnly />}
      />
      <Route
        exact
        path="/dashboard"
        element={<MyRoute component={Dashboard} isClosed professorOnly />}
      />

      {/* AUTENTICAÇÃO */}
      <Route
        exact
        path="/register"
        element={<MyRoute component={Register} isClosed />}
      />
      <Route exact path="/login" element={<MyRoute component={Login} />} />

      {/* FOTOS */}
      <Route
        exact
        path="/fotos/:id"
        element={<MyRoute component={Fotos} isClosed professorOnly />}
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
