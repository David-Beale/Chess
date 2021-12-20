import styled from "styled-components";

export const BoardContainer = styled.div`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
