import styled from "styled-components";
import FileCopyIcon from "@material-ui/icons/FileCopy";

export const Inset = styled.div`
  box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.38),
    inset 8px 8px 16px rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 40px;
  border-radius: 20px;
  display: flex;
  padding: 0 15px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;
export const CopyIcon = styled(FileCopyIcon)`
  cursor: pointer;
`;
