import React, { useState } from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

import { StyledIconButton } from "../ToggleButtonStyle";

import { SubContainer } from "../../MenuStyle";
import NewGameDialog from "./NewGameDialog/NewGameDialog";

export default function NewGameButton() {
  const [open, setOpen] = useState(false);

  const onClick = () => {
    setOpen(true);
  };

  return (
    <>
      <SubContainer>
        <StyledIconButton onClick={onClick}>
          <AddCircleOutlineIcon fontSize="large" />
        </StyledIconButton>
        New Game
      </SubContainer>
      <NewGameDialog open={open} setOpen={setOpen} />
    </>
  );
}
