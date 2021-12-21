import styled from "styled-components";

export const PieceContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  transform: ${({ translate }) =>
    `translate(${translate[0]}px, ${translate[1]}px)`};
`;
export const PieceBackground = styled.div`
  position: absolute;
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  border-radius: 50%;
  border: 1px solid ${({ color }) => (color === "white" ? "black" : "white")};
  background-color: ${({ color }) => color};
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Text = styled.div`
  color: ${({ color }) => (color === "white" ? "black" : "white")};
`;
