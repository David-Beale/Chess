import styled from "styled-components";

export const StyledCell = styled.div`
  position: relative;
  box-sizing: border-box;
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  background-color: ${({ color }) => color};
  cursor: ${(props) => (props.hover || props.selected ? "pointer" : "")};
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${(props) => {
    if (props.selected) return "5px solid blue";
    if (props.destination) return "5px solid orange";
    return "";
  }};
  &:hover {
    border: ${({ hover }) => (hover ? "5px solid lime" : "")};
  }
`;

export const PieceBackground = styled.div`
  position: absolute;
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  border-radius: 50%;
  border: 1px solid ${({ color }) => (color === "white" ? "black" : "white")};
  background-color: ${({ color }) => color};
  left: 25%;
  top: 25%;
  z-index: 1;
`;
export const Text = styled.div`
  position: relative;
  z-index: 2;
  color: ${({ pieceColor }) => (pieceColor === "white" ? "black" : "white")};
`;
