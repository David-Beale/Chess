import styled from "styled-components";

export const BoardContainer = styled.div`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  position: relative;
`;
export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
