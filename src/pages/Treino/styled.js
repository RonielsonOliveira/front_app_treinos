import styled from "styled-components";
import { primaryColor } from "../../config/colors.js";

export const Title = styled.h1`
  text-align: center;
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  input {
    width: 70%;
    height: 40px;
    margin: 0 auto;
    margin-bottom: 20px;
    border: 2px solid #ddd;
    border-radius: 4px;
    padding: 0 10px;
  }

  button {
    margin: 0 auto;
    background-color: ${primaryColor};
  }
  label {
    display: flex;
    margin: 0 auto;
    width: 100%;
    justify-items: center;
    align-items: center;
  }
  .title {
    display: flex;
    font-size: 20px;
    padding: 4px;
    width: 70%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
  }
  .exercicioGrid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 20px;
    width: 100%;
    margin: 20px auto;
  }

  select {
    width: 70%;
    margin: 0 auto;
  }
`;
export const CardFotos = styled.div`
  width: 100%;
  height: 100%;
  overflow: visible;

  .slick-slider,
  .slick-list,
  .slick-track,
  .slick-slide,
  .slick-slide > div {
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }
`;
