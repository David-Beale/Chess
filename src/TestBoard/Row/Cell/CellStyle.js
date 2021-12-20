import styled from "styled-components";

export const StyledCell = styled.div`
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  background-color: ${({ color }) => color};
  color: ${({ color }) => (color === "white" ? "black" : "white")};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
