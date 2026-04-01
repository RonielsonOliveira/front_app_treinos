import styled from "styled-components";
import { primaryColor, primaryDarkColor } from "../../config/colors.js";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background: #020617;

  a {
    position: relative;
    display: flex;
    align-items: center;
    margin-right: 10px;
    color: #f1f5f9;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      color: white;
    }

    &:hover span,
    &:hover .span-left {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
  }
  .userLoggedWrapper {
    padding: 10px;
    display: flex;
    align-items: center;
  }

  .userNoLoggedWrapper {
    padding: 10px;
    display: flex;
    align-items: center;
    margin-left: auto;
  }

  .menu {
    width: 100%;
    display: flex;
    flex-direction: row;
  }
  .menu-aluno {
    width: 100%;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
  }

  .title-menu {
    margin-right: 10px;
    color: white;
  }

  .online-status {
    margin-right: 10px;
  }

  label {
    padding: 5px;

    &:hover {
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    justify-content: space-between;

    .userLoggedWrapper,
    .userNoLoggedWrapper {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 5px 0;
    }
    .userLoggedWrapper,
    .userNoLoggedWrapper {
      margin-left: 0;
      margin-right: 0;
    }
  }
`;
export const DesktopMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  a {
    display: flex;
    align-items: center;
    gap: 6px;

    color: #f1f5f9;
    font-weight: bold;
    text-decoration: none;

    transition: color 0.2s ease;

    &:hover {
      color: ${primaryColor};
    }
  }

  .menu {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .right {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .userWrapper {
    display: flex;
    align-items: center;
    gap: 8px;
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
  background: none;
  border: none;
  color: #f1f5f9;
  font-size: 24px;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;

  width: 75%;
  max-width: 300px;
  height: 100%;

  background: #020617;

  padding: 24px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;

  transform: translateX(100%);
  transition: transform 0.3s ease;

  z-index: 1000;

  &.open {
    transform: translateX(0);
  }

  a {
    color: #fff;
    font-size: 18px;
  }
  .options {
    display: flex;

    height: 100%;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    margin-bottom: 10px;
    a {
      padding: 5px;
      font-size: 30px;
      font-weight: 200;
    }
  }
  .userNoLoggedWrapper {
    display: flex;
    flex-direction: column;
    .online-status {
    }
    .status {
      color: green;
      font-weight: 600;
    }
  }

  .title-menu {
    margin-right: 10px;
    text-align: center;
    font-size: 20px;
    color: white;
    font-weight: 600;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;
