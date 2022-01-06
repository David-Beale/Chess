import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
`;
export const Button = styled.div`
  width: 50%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color};
  color: ${({ color }) => (color === "white" ? "black" : "white")};
  padding: 5px;
  border-radius: 10px;
  margin: 0 5px;
  cursor: pointer;
  &:hover {
    border: 1px solid ${({ color }) => (color === "white" ? "black" : "white")};
  }
`;
