import styled from "styled-components";

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 30px;
`;

export const EmptyMessage = styled.p`
  text-align: center;
  color: #7f8c8d;
  font-size: 16px;
  margin-top: 40px;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 30px;
`;
export const NewButton = styled.button`
  padding: 10px 18px;

  border: 0;
  border-radius: 8px;

  background: #22c55e;
  color: white;

  font-weight: 600;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: #16a34a;
  }
`;

export const Button = styled.button`
  background: #e53935;
  color: #fff;
  border: 0;
  border-radius: 6px;
  padding: 10px 18px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #c62828;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 15px;
  margin-bottom: 30px;
`;

export const EditButton = styled.button`
  background: #2563eb;
  color: #fff;
  border: 0;
  border-radius: 6px;
  padding: 10px 18px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: #1d4ed8;
  }
`;

export const DeleteButton = styled.button`
  background: #dc2626;
  color: #fff;
  border: 0;
  border-radius: 6px;
  padding: 10px 18px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: #b91c1c;
  }
`;
