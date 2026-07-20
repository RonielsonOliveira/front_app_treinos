import styled, { createGlobalStyle } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  primaryColor,
  primaryDarkColor,
  errorColor,
  successColor,
} from "../config/colors.js";
import "react-toastify/dist/ReactToastify.css";
export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

html,
body,
#root {
  width: 100%;
  min-height: 100%;
  overflow-x: hidden;
}

body {
  position: relative;
  background: #0f172a;
  font-family: sans-serif;
  color: ${primaryDarkColor};
}

  button {
    cursor: pointer;
    background: ${primaryColor};
    border: none;
    color: #fff;
    padding:  10px 20px;
    border-radius: 4px;
    font-weight: 700;
    transition: all 300ms;
  }
  button:hover{
    filter: brightness(75%);
  }

  a {
    text-decoration: none;
    color: ${primaryColor};
  }
  h1{
    font-size: 38px;
  }
  ul {
    list-style: none;
  }
   .Toastify__toast--success {
    background: ${successColor};
    color: #fff;
  }

  .Toastify__toast--error {
    background: ${errorColor};
    color: #fff;
  }

`;

export const Container = styled.section`
  width: 100%;
  min-height: 100%;

  background: #0f172a;

  margin: 0;

  @media (min-width: 768px) {
    max-width: 900px;
    margin: 20px auto;
    padding: 24px;
    border-radius: 4px;
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;
