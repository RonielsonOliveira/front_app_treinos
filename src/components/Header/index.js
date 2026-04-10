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
import { Nav, MobileMenu, MobileMenuButton, DesktopMenu } from "./styled.js";
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

                    <Link to="/exercicio">
                      <CgGym size={24} />
                      <label>Adicionar Exercicio</label>
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

                  {isLoggedIn && (
                    <div className="right">
                      <Link onClick={onLogoutClick}>
                        <FaPowerOff size={20} />
                        <label>Sair</label>
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </>
          ) : (
            <></>
          )}
        </DesktopMenu>

        <MobileMenu className={menuOpen ? "open" : ""}>
          {isLoggedIn ? (
            <>
              {role == "user" ? (
                <>
                  <div className="title-menu">
                    {role === "user" ? "Menu Professor" : "Menu Aluno"}
                  </div>
                  <div className="options">
                    <Link to="/" onClick={() => setMenuOpen(false)}>
                      Inicio
                    </Link>
                    <Link to="/exercicio" onClick={() => setMenuOpen(false)}>
                      Exercicio
                    </Link>
                    <Link to="/treino" onClick={() => setMenuOpen(false)}>
                      Treino
                    </Link>
                    <Link to="/aluno" onClick={() => setMenuOpen(false)}>
                      Aluno
                    </Link>
                  </div>
                  <div className="userNoLoggedWrapper">
                    {isLoggedIn && (
                      <>
                        <label className="status">Online</label>
                      </>
                    )}
                    <Link to="/register" onClick={() => setMenuOpen(false)}>
                      <FaUserAlt size={24} />
                      {isLoggedIn ? (
                        <label>Editar dados</label>
                      ) : (
                        <label>Criar Conta</label>
                      )}
                    </Link>

                    {isLoggedIn && (
                      <Link onClick={onLogoutClick}>
                        <FaPowerOff size={20} />
                        <label>Sair</label>
                      </Link>
                    )}
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  <div>
                    {role == "user" ? (
                      <div className="title-menu">Menu Professor</div>
                    ) : (
                      <div className="title-menu">Menu Aluno</div>
                    )}
                  </div>
                  <Link to="/me/treinos" onClick={() => setMenuOpen(false)}>
                    Inicio
                  </Link>
                  {isLoggedIn && (
                    <Link onClick={onLogoutClick}>
                      <FaPowerOff size={20} />
                      <label>Sair</label>
                    </Link>
                  )}
                </>
              )}
            </>
          ) : (
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              Login
            </Link>
          )}
        </MobileMenu>
      </Nav>
    </>
  );
}
