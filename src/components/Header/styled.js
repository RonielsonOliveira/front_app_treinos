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

  span {
    position: absolute;
    top: 100%;
    right: 0;
    background: ${primaryDarkColor};
    padding: 5px 10px;
    border-radius: 4px;
    white-space: nowrap;

    opacity: 0;
    visibility: hidden;

    transform: translateY(-5px);
    transition: all 0.3s ease;
  }

  .span-left {
    position: absolute;
    top: 100%;
    left: 0;
    background: ${primaryDarkColor};
    padding: 5px 10px;
    border-radius: 4px;
    white-space: nowrap;

    opacity: 0;
    visibility: hidden;

    transform: translateY(-5px);
    transition: all 0.3s ease;
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
  gap: 16px;

  a {
    color: #f1f5f9;
    font-weight: bold;

    &:hover {
      color: ${primaryColor};
    }
  }

  @media (max-width: 768px) {
    .menu {
      display: none;
    }

    .userLoggedWrapper {
      flex: 1;
      justify-content: flex-start;
    }
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

  @media (min-width: 769px) {
    display: none;
  }
`;
