import styled from "styled-components";
import { primaryColor, primaryDarkColor } from "../../config/colors.js";

export const ExercicioCheck = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  width: 400px;
  border-radius: 8px;

  img {
    width: 250px;
    height: 250px;
  }
  &:hover {
    background-color: ${primaryColor};
  }
`;
export const Exercicio = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${primaryColor};
  cursor: pointer;
`;
export const ExercicioInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;
export const ExercicioInfoTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 30px;
  padding: 10px;
`;
export const ExercicioInfoDetails = styled.div`
  font-size: 20px;
  font-style: italic;
  padding: 10px;
`;
export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .checkbox {
    accent-color: ${primaryDarkColor};
  }
  input {
    width: 40px;
    height: 40px;
    margin-top: 20px;
  }
`;
