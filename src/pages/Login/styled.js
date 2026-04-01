import styled from "styled-components";
import { primaryColor } from "../../config/colors.js";

export const Title = styled.h1`
  border-radius: 4px;
  color: black;
  justify-content: center;
  align-items: center;
  display: flex;
  small {
    font-size: 12pt;
    margin-left: 15px;
    color: aqua;
  }
`;
export const Container = styled.section`
  width: 70%;
  height: 80%;
  margin: 20px auto;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    margin: 0 auto;
  }
`;

export const LoginWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;
export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 0 50px 50px 0;
  padding: 8px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  @media (max-width: 768px) {
    width: 100%;
    border-radius: 8px;
    justify-content: center;
  }

  input {
    margin-bottom: 20px;
    width: 50%;
    height: 40px;
    margin: 10px;
    padding: 0 10px;
    border-radius: 4px;
    border: 1px solid #ddd;
    @media (max-width: 768px) {
      width: 100%;
      border-radius: 8px;
    }
  }
  button {
    margin: 0 auto;
    width: 20%;
    margin: 10px;
    border-radius: 8px;
    background-color: ${primaryColor};
    @media (max-width: 768px) {
      width: 70%;
      border-radius: 8px;
    }
  }
  select {
    padding: 0 10px;
    margin: 10px;
    width: 30%;
    cursor: pointer;
    @media (max-width: 768px) {
      width: 70%;
      border-radius: 8px;
    }
  }
`;

export const ImageLogin = styled.div`
  width: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  border-radius: 50px 0 0 50px;
  justify-content: center;
  img {
    width: 100%;
    border-radius: 50px 0 0 50px;
    max-height: 100%;
    object-fit: cover;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
