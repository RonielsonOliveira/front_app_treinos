import React from "react";
import {
  FaHome,
  FaSignInAlt,
  FaUserAlt,
  FaCircle,
  FaPowerOff,
} from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { HiUserAdd } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { Nav } from "./styled.js";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/modules/auth/actions.js";
export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);
  const handleLogout = (e) => {
    e.preventDefault();
    navigate("/");
    dispatch(actions.logout());
  };
  return (
    <Nav>
      {isLoggedIn ? (
        <div className="userLoggedWrapper">
          <div>
            {role == "user" ? (
              <div className="title-menu">Menu Professor</div>
            ) : (
              <div className="title-menu">Menu Aluno</div>
            )}
          </div>

          {role == "user" ? (
            <div className="menu">
              <Link to="/">
                <FaHome size={24} />

                <span>Inicio</span>
              </Link>
              <Link to="/exercicio">
                <CgGym size={24} />
                <span>Adicionar Exercicio</span>
              </Link>
              <Link to="/treino">
                <GiWeightLiftingUp size={24} />
                <span>Adicionar Treino</span>
              </Link>
              <Link to="/aluno">
                <HiUserAdd size={24} />
                <span>Adicionar Aluno</span>
              </Link>
            </div>
          ) : (
            <Link to="/me/treinos">
              <FaHome size={24} />
              <span>Inicio</span>
            </Link>
          )}
        </div>
      ) : (
        <Link to="/login">
          <FaSignInAlt size={24} />
          <div className="span-left">Fazer Login</div>
        </Link>
      )}
      <div className="userNoLoggedWrapper">
        {isLoggedIn && (
          <FaCircle className="online-status" size={24} color="#66ff33" />
        )}
        <Link to="/register">
          <FaUserAlt size={24} />
          {isLoggedIn ? <span>Editar dados</span> : <span>Fazer Cadastro</span>}
        </Link>
        <Link onClick={handleLogout} to="/logout">
          {isLoggedIn ? (
            <>
              <span>Sair</span>
              <FaPowerOff size={24} />
            </>
          ) : (
            <></>
          )}
        </Link>
      </div>
    </Nav>
  );
}
