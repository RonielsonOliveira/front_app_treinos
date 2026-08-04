import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 8px;
  gap: 15px;

  padding: 12px;

  background: #1e293b;

  border-radius: 12px;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: #334155;
  }

  img {
    width: 80px;
    height: 80px;

    object-fit: cover;

    border-radius: 8px;
  }

  h3 {
    color: white;
  }

  span {
    color: #22c55e;
  }
`
