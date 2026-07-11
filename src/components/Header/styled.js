import styled from "styled-components";
import { Link } from "react-router-dom";
import { primaryColor } from "../../config/colors.js";

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 999;

  width: 100%;
  height: 72px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 28px;

  background: rgba(2, 6, 23, 0.96);

  backdrop-filter: blur(12px);

  border-bottom: 1px solid #1e293b;

  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);

  .menu,
  .menu-aluno {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .menu-aluno {
    justify-content: space-between;
    width: 100%;
  }

  .title-menu {
    color: white;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 0.5px;
  }

  .userLoggedWrapper,
  .userNoLoggedWrapper {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .online-status {
    display: flex;
    align-items: center;
  }

  label {
    color: white;
    font-weight: 600;
    cursor: pointer;
  }

  a {
    display: flex;
    align-items: center;
    gap: 8px;

    color: #cbd5e1;
    text-decoration: none;

    transition: 0.25s;
  }

  a:hover {
    color: white;
  }

  @media (max-width: 768px) {
    height: 64px;
    padding: 0 18px;
  }
`;

export const DesktopMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  .menu {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .right {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  a {
    padding: 10px 16px;

    border-radius: 10px;

    color: #cbd5e1;

    font-size: 15px;
    font-weight: 600;

    transition: 0.25s;

    &:hover {
      background: #1e293b;
      color: white;
      transform: translateY(-1px);
    }
  }

  .userWrapper {
    display: flex;
    align-items: center;
    gap: 10px;

    padding-left: 18px;

    border-left: 1px solid #334155;

    label {
      color: white;
      font-weight: 600;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileMenuButton = styled.button`
  width: 46px;
  height: 46px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 10px;

  background: #1e293b;

  color: white;

  font-size: 22px;

  cursor: pointer;

  transition: 0.25s;

  &:hover {
    background: ${primaryColor};
    transform: scale(1.05);
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;

  background: rgba(0, 0, 0, 0.55);

  backdrop-filter: blur(2px);

  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};

  transition: 0.3s;

  z-index: 998;
`;

export const MobileMenu = styled.div`
  position: fixed;

  top: 0;
  right: 0;

  width: 300px;
  max-width: 85%;

  height: 100vh;

  background: #0f172a;

  border-left: 1px solid #334155;

  box-shadow: -15px 0 40px rgba(0, 0, 0, 0.45);

  padding: 28px 22px;

  display: flex;
  flex-direction: column;

  transform: translateX(100%);
  transition: transform 0.35s ease;

  z-index: 999;

  &.open {
    transform: translateX(0);
  }

  .title-menu {
    text-align: center;

    color: white;

    font-size: 24px;
    font-weight: 700;

    margin-bottom: 35px;
  }

  .options {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .options a {
    display: flex;
    align-items: center;
    gap: 14px;

    padding: 14px 16px;

    border-radius: 12px;

    color: #cbd5e1;

    font-size: 17px;
    font-weight: 600;

    transition: 0.25s;
  }

  .options a:hover {
    background: #1e293b;
    color: white;
    padding-left: 22px;
  }

  .userLoggedWrapper,
  .userNoLoggedWrapper {
    margin-top: auto;

    padding-top: 20px;

    border-top: 1px solid #334155;

    display: flex;
    flex-direction: column;
    gap: 14px;

    color: white;
  }

  .online-status {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .status {
    color: #22c55e;
    font-weight: bold;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;

  color: white;
  text-decoration: none;

  font-size: 22px;
  font-weight: 700;

  transition: 0.25s;

  &:hover {
    color: ${primaryColor};
  }

  img {
    width: 38px;
    height: 38px;
    object-fit: contain;
  }
`;
