import React from "react";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { StyledIconButton } from "../ToggleButtonStyle";

import { SubContainer } from "../../MenuStyle";
import { socket } from "../../../../Socket/socket";
import { useStore } from "../../../../Store/store";

export default function LeaveButton() {
  const setMode = useStore((state) => state.setMode);
  const onClick = () => {
    setMode("ai");
    socket.disconnect();
    window.history.replaceState(
      "",
      "",
      window.location.origin + window.location.pathname
    );
  };

  return (
    <>
      <SubContainer>
        <StyledIconButton onClick={onClick}>
          <ExitToAppIcon fontSize="large" />
        </StyledIconButton>
        Leave Game
      </SubContainer>
    </>
  );
}
