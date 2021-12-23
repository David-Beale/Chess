import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
  padding: 60px 25px 0 25px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1.1rem;
  font-weight: 600;
  color: darkslategray;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
export const TopContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 5px;
`;
export const SubContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5px 0;
  padding: 10px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 0 10px -1px slategray;
  height: 70px;
`;
export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;