import styled from "styled-components";

export const FotoItem = styled.div`
  position: relative;

  width: 100%;
  height: 80px;

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;

    border-radius: 8px;
  }
`;

export const FotoImagem = styled.img`
  width: 100%;
  height: 80px;

  object-fit: cover;

  border-radius: 6px;

  opacity: ${({ preview }) => (preview ? 0.8 : 1)};
`;
export const RemoveButton = styled.button`
  position: absolute;

  top: 5px;
  right: 5px;

  width: 22px !important;
  height: 22px !important;

  padding: 0;
  margin: 0;

  background: #ef4444 !important;
  color: white;

  border: none;
  border-radius: 50% !important;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 12px;
  font-weight: bold;

  line-height: 1;

  cursor: pointer;

  z-index: 9999;

  &:hover {
    background: #dc2626;
  }
`;
