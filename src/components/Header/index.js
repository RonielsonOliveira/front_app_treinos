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
  const handleLogout = (e) => {
    e.preventDefault();
    navigate("/");
    dispatch(actions.logout());
  };

  return (
    <>
      <Nav>
        <div className="left">
          <MobileMenuButton onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </MobileMenuButton>

          {isLoggedIn && (
            <DesktopMenu>
              <div className="userLoggedWrapper">
                {role == "user" ? (
                  <div className="menu">
                    <div>
                      {role == "user" ? (
                        <div className="title-menu">Menu Professor</div>
                      ) : (
                        <div className="title-menu">Menu Aluno</div>
                      )}
                    </div>
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
                  <div className="menu">
                    <Link to="/me/treinos">
                      <FaHome size={24} />
                      <span>Ver treinos</span>
                    </Link>
                  </div>
                )}
              </div>
            </DesktopMenu>
          )}
        </div>

        <div className="right">
          <div className="userNoLoggedWrapper">
            {isLoggedIn && (
              <FaCircle className="online-status" size={24} color="#66ff33" />
            )}

            <Link to="/register">
              <FaUserAlt size={24} />
            </Link>

            {isLoggedIn && (
              <Link onClick={handleLogout} to="/logout">
                <FaPowerOff size={24} />
              </Link>
            )}
          </div>
        </div>
      </Nav>

      <MobileMenu className={menuOpen ? "open" : ""}>
        {isLoggedIn ? (
          <>
            {role == "user" ? (
              <>
                <div>
                  {role == "user" ? (
                    <div className="title-menu">Menu Professor</div>
                  ) : (
                    <div className="title-menu">Menu Aluno</div>
                  )}
                </div>
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
              </>
            )}
          </>
        ) : (
          <Link to="/login" onClick={() => setMenuOpen(false)}>
            Login
          </Link>
        )}
      </MobileMenu>
    </>
  );
}
