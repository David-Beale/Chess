import React from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

import { StyledIconButton } from "../ToggleButtonStyle";

import { SubContainer } from "../../MenuStyle";
import { useStore } from "../../../../Store/store";

export default function NewGameButton() {
  const startNewGame = useStore((state) => state.startNewGame);

  return (
    <>
      <SubContainer>
        <StyledIconButton onClick={startNewGame}>
          <AddCircleOutlineIcon fontSize="large" />
        </StyledIconButton>
        New Game
      </SubContainer>
    </>
  );
}
