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
  background-color: white;
  margin: 20px auto;
  padding: 20px;
  border-radius: 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 8px;
  align-items: center;

  input {
    margin-bottom: 20px;
    width: 40%;
    height: 40px;
    margin: 10px;
    padding: 0 10px;
    border-radius: 4px;
    border: 1px solid #ddd;
  }
  label {
    font-size: 18px;
  }

  button {
    margin: 0 auto;
    width: 20%;
    margin: 10px;
    border-radius: 8px;
    background-color: ${primaryColor};
  }
  select {
    padding: 0 10px;
    margin: 10px;
    width: 20%;
    cursor: pointer;
  }
`;
