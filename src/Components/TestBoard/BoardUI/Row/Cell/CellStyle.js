import styled from "styled-components";

export const StyledCell = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 12.5%;
  cursor: ${(props) => (props.hover || props.selected ? "pointer" : "")};
  border: ${(props) => {
    if (props.selected) return "5px solid blue";
    if (props.destination) return "5px solid orange";
    return "";
  }};
  &:hover {
    border: ${({ hover }) => (hover ? "5px solid lime" : "")};
  }
`;
