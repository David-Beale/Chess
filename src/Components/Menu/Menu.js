import React, { useState, memo } from "react";
import Drawer from "@material-ui/core/Drawer";

import MenuButton from "./Components/MenuButton/MenuButton";

import { Container, TopContainer } from "./MenuStyle";
import ToggleCameraLock from "./Components/ToggleCameraLock/ToggleCameraLock";
import NewGameButton from "./Components/NewGame/NewGameButton";
import AiLevelSlider from "./Components/AiLevelSlider/AiLevelSlider";

export default memo(function Menu() {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <>
      <MenuButton setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <Drawer variant="persistent" anchor="left" open={menuOpen}>
        <Container>
          <TopContainer>
            <ToggleCameraLock />
          </TopContainer>
          <NewGameButton />
          <AiLevelSlider />
        </Container>
      </Drawer>
    </>
  );
});
