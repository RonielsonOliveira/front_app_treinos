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

  html, body {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }

  body {
    font-family: sans-serif;
    background:#0f172a;
    color: ${primaryDarkColor};
  }

  #root {
    height: 100%;
  }

button {
  cursor: pointer;
  font-family: inherit;
}


  a {
    text-decoration: none;
    color: ${primaryColor};
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
    border-radius: 8px;
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;
