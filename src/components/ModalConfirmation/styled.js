import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;

  background: rgba(0, 0, 0, 0.55);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 9999;
`;

export const Container = styled.div`
  width: 420px;
  max-width: 90%;

  background: #fff;

  border-radius: 10px;

  padding: 25px;
`;

export const Title = styled.h2`
  margin-bottom: 15px;
`;

export const Message = styled.p`
  color: #666;
  line-height: 1.6;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;

  margin-top: 30px;
`;

export const CancelButton = styled.button`
  padding: 10px 18px;

  border: 0;

  border-radius: 6px;

  background: #ddd;

  cursor: pointer;
`;

export const DeleteButton = styled.button`
  padding: 10px 18px;

  border: 0;

  border-radius: 6px;

  background: #e53935;

  color: white;

  cursor: pointer;

  &:hover {
    background: #c62828;
  }
`;
