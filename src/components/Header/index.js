import {
  FaHome,
  FaSignInAlt,
  FaUserAlt,
  FaCircle,
  FaPowerOff,
} from "react-icons/fa";
import React, { useState } from "react";
import { GiWeightLiftingUp } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { HiUserAdd } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import {
  Nav,
  DesktopMenu,
  MobileMenu,
  MobileMenuButton,
  Overlay,
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/modules/auth/actions.js";
export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);
  const handleLogout = () => {
    dispatch(actions.logout());
    navigate("/");
  };

  const onLogoutClick = () => {
    handleLogout();
    setMenuOpen(false);
  };
  return (
    <>
      <Nav>
        <MobileMenuButton onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </MobileMenuButton>

        <DesktopMenu>
          {isLoggedIn ? (
            <>
              {role === "user" ? (
                <>
                  <div className="menu">
                    <Link to="/">
                      <FaHome size={24} />
                      <label>Inicio</label>
                    </Link>

                    <Link to="/exercicios">
                      <GiWeightLiftingUp size={24} />
                      <label>Gerenciar Exercícios</label>
                    </Link>

                    <Link to="/exercicio">
                      <CgGym size={24} />
                      <label>Adicionar Exercício</label>
                    </Link>

                    <Link to="/treino">
                      <GiWeightLiftingUp size={24} />
                      <label>Adicionar Treino</label>
                    </Link>

                    <Link to="/aluno">
                      <HiUserAdd size={24} />
                      <label>Adicionar Aluno</label>
                    </Link>
                  </div>

                  <div className="right">
                    <div className="userWrapper">
                      <FaCircle size={16} color="#66ff33" />
                      <label>Online</label>

                      <Link to="/register">
                        <FaUserAlt size={20} />
                        <label>Editar dados</label>
                      </Link>

                      <Link onClick={handleLogout} to="#">
                        <FaPowerOff size={20} />
                        <label>Sair</label>
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                <div className="menu-aluno">
                  <Link to="/me/treinos">
                    <FaHome size={24} />
                    <label>Ver treinos</label>
                  </Link>

                  <div className="right">
                    <Link onClick={onLogoutClick}>
                      <FaPowerOff size={20} />
                      <label>Sair</label>
                    </Link>
                  </div>
                </div>
              )}
            </>
          ) : null}
        </DesktopMenu>
      </Nav>

      <Overlay open={menuOpen} onClick={() => setMenuOpen(false)} />

      <MobileMenu open={menuOpen}>
        {role === "user" ? (
          <>
            <div className="title-menu">
              <div className="title-content">
                <h2>Menu Professor</h2>
              </div>

              <div className="close-menu" onClick={() => setMenuOpen(false)}>
                ✕
              </div>
            </div>

            <div className="options">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                <FaHome />
                <span>Início</span>
              </Link>

              <Link to="/exercicio" onClick={() => setMenuOpen(false)}>
                <CgGym />
                <span>Adicionar Exercício</span>
              </Link>

              <Link to="/treino" onClick={() => setMenuOpen(false)}>
                <GiWeightLiftingUp />
                <span>Adicionar Treino</span>
              </Link>

              <Link to="/exercicios" onClick={() => setMenuOpen(false)}>
                <CgGym />
                <span>Gerenciar Exercícios</span>
              </Link>

              <Link to="/aluno" onClick={() => setMenuOpen(false)}>
                <HiUserAdd />
                <span>Adicionar Aluno</span>
              </Link>
            </div>

            <div className="userLoggedWrapper">
              <div className="status">
                <FaCircle />
                <span>Online</span>
              </div>

              <Link to="/register" onClick={() => setMenuOpen(false)}>
                <FaUserAlt />
                <span>Editar dados</span>
              </Link>

              <Link onClick={onLogoutClick}>
                <FaPowerOff />
                <span>Sair</span>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="title-menu">
              <div className="title-content">
                <h2>Menu Aluno</h2>
              </div>

              <div className="close-menu" onClick={() => setMenuOpen(false)}>
                ✕
              </div>
            </div>

            <div className="options">
              <Link to="/me/treinos" onClick={() => setMenuOpen(false)}>
                <FaHome />
                <span>Meus Treinos</span>
              </Link>
            </div>

            <div className="userLoggedWrapper">
              <div className="status">
                <FaCircle />
                <span>Online</span>
              </div>

              <Link onClick={onLogoutClick}>
                <FaPowerOff />
                <span>Sair</span>
              </Link>
            </div>
          </>
        )}
      </MobileMenu>
    </>
  );
}
