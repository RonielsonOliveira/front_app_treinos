import styled from "styled-components";
import { primaryColor } from "../../config/colors.js";

export const Title = styled.h1`
  text-align: center;
`;
export const Container = styled.section`
  width: 70%;
  height: 80%;
  background-color: white;
  margin: 20px auto;
  padding: 80px;
  border-radius: 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
    width: 30%;
    background-color: ${primaryColor};
  }
  label {
    margin: 0 auto;
    width: 100%;
    justify-items: center;
    align-items: center;
  }
`;

export const ProfilePicture = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  padding: 0 0 20px;
  position: relative;
  margin-top: 30px;

  img {
    width: 180px;
    height: 180px;
    border-radius: 50px;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    position: absolute;
    bottom: 0;
    color: #fff;
    background: ${primaryColor};
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;
export const FotosGrid = styled.div`
  display: flex;

  gap: 0.5rem;
  margin: 0 auto;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 4px;
  }
`;
