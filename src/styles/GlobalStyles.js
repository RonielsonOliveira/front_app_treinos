import styled, { createGlobalStyle } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";

import {
  primaryColor,
  primaryDarkColor,
  errorColor,
  successColor,
} from "../config/colors.js";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  html {
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -webkit-text-size-adjust: 100%;
  }

  body {
    width: 100%;
    min-height: 100vh;

    overflow-x: hidden;
    overflow-y: auto;

    font-family: sans-serif;

    background: #0f172a;
    color: ${primaryDarkColor};

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    width: 100%;
    min-height: 100vh;

    overflow-x: hidden;
  }

  img,
  svg,
  video,
  canvas {
    display: block;
    max-width: 100%;
  }

  button {
    cursor: pointer;
    border: none;

    background: ${primaryColor};

    color: #fff;

    padding: 10px 20px;

    border-radius: 4px;

    font-weight: 700;

    transition: all .25s ease;

    &:hover {
      filter: brightness(.9);
    }

    &:disabled {
      opacity: .6;
      cursor: not-allowed;
    }
  }

  input,
  textarea,
  select,
  button {
    font: inherit;
  }

  a {
    color: ${primaryColor};
    text-decoration: none;
  }

  ul,
  ol {
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
  margin: 0 auto;

  background: #0f172a;

  @media (max-width: 767px) {
    padding: 16px;
  }

  @media (min-width: 768px) {
    max-width: 900px;

    padding: 24px;

    border-radius: 10px;
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;
