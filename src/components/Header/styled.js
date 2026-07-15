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
  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 14px;

  background: #1e293b;

  color: white;

  font-size: 26px;

  transition: 0.25s;

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);

  &:hover {
    background: ${primaryColor};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
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

export const MobileMenu = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "open",
})`
  position: fixed;

  top: 0;
  right: 0;

  width: 100%;
  height: 100dvh;

  z-index: 9999;

  display: flex;
  flex-direction: column;

  background: linear-gradient(180deg, #111827 0%, #0f172a 45%, #020617 100%);

  transform: translateX(${({ open }) => (open ? "0" : "100%")});

  transition: transform 0.35s ease;

  overflow-y: auto;

  padding-bottom: 30px;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  .title-menu {
    flex-shrink: 0;

    padding: 22px;

    display: flex;

    justify-content: space-between;

    align-items: center;

    background: linear-gradient(135deg, ${primaryColor}, #15803d);

    box-shadow: 0 10px 30px rgba(34, 197, 94, 0.25);
  }

  .title-content {
    display: flex;

    flex-direction: column;
  }

  .title-content h2 {
    color: white;

    font-size: 22px;

    font-weight: 700;
  }

  .title-content span {
    margin-top: 5px;

    color: rgba(255, 255, 255, 0.8);

    font-size: 13px;
  }

  .close-menu {
    width: 42px;

    height: 42px;

    display: flex;

    align-items: center;

    justify-content: center;

    border-radius: 12px;

    background: rgba(255, 255, 255, 0.15);

    color: white;

    font-size: 22px;

    cursor: pointer;
  }

  .options {
    display: flex;

    flex-direction: column;

    gap: 12px;

    padding: 25px 20px;

    flex: 1;
  }

  .options a {
    display: flex;

    align-items: center;

    gap: 15px;

    padding: 16px;

    border-radius: 14px;

    color: #cbd5e1;

    font-size: 16px;

    font-weight: 600;

    background: rgba(255, 255, 255, 0.03);

    transition: 0.25s;
  }

  .options a:hover {
    background: #1e293b;

    color: white;

    transform: translateX(6px);
  }

  .userLoggedWrapper,
  .userNoLoggedWrapper {
    margin-top: auto;

    padding: 20px;

    display: flex;

    flex-direction: column;

    gap: 14px;

    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }

  .status {
    display: flex;

    justify-content: center;

    align-items: center;

    gap: 8px;

    padding: 14px;

    border-radius: 12px;

    background: rgba(34, 197, 94, 0.15);

    color: #22c55e;

    font-weight: 700;
  }

  .userLoggedWrapper a,
  .userNoLoggedWrapper a {
    display: flex;

    align-items: center;

    gap: 14px;

    padding: 14px;

    border-radius: 12px;

    color: #e2e8f0;

    transition: 0.25s;
  }

  .userLoggedWrapper a:hover,
  .userNoLoggedWrapper a:hover {
    background: #1e293b;

    color: white;
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
