import styled from "styled-components";
import { primaryColor, primaryDarkColor } from "../../config/colors.js";

export const Nav = styled.nav`
  display: flex;
  background: ${primaryColor};
  flex-direction: row;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  a {
    position: relative;
    display: flex;
    align-items: center;
    margin-right: 10px;
    color: #fff;
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

  .userLoggedWrapper,
  .userNoLoggedWrapper {
    padding: 10px;
    display: flex;
    align-items: center;
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
    flex-direction: column;
    align-items: flex-start;

    .userLoggedWrapper,
    .userNoLoggedWrapper {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 5px 0;
    }
  }
`;
