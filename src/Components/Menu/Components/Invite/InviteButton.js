import React, { useState } from "react";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

import { StyledIconButton } from "../ToggleButtonStyle";

import { SubContainer } from "../../MenuStyle";
import InviteDialog from "./InviteDialog/InviteDialog";
import { useSocket } from "../../../../Socket/useSocket";

export default function InviteButton() {
  const [open, setOpen] = useState(false);
  const [connect, newGame] = useSocket();

  const onClick = () => {
    setOpen(true);
    connect();
  };

  return (
    <>
      <SubContainer>
        <StyledIconButton onClick={onClick}>
          <PersonAddIcon fontSize="large" />
        </StyledIconButton>
        Invite Friend
      </SubContainer>
      <InviteDialog open={open} setOpen={setOpen} newGame={newGame} />
    </>
  );
}
