import React, { useState, memo } from "react";
import Drawer from "@material-ui/core/Drawer";

import MenuButton from "./Components/MenuButton/MenuButton";

import { Container, TopContainer } from "./MenuStyle";
import ToggleCameraLock from "./Components/ToggleCameraLock/ToggleCameraLock";
import NewGameButton from "./Components/NewGame/NewGameButton";
import AiLevelSlider from "./Components/AiLevelSlider/AiLevelSlider";
import Info from "./Components/Info/Info";
import InviteButton from "./Components/Invite/InviteButton";
import { useStore } from "../../Store/store";
import LeaveButton from "./Components/Leave/LeaveButton";

export default memo(function Menu() {
  const [menuOpen, setMenuOpen] = useState(true);
  const mode = useStore((state) => state.mode);

  return (
    <>
      <MenuButton setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <Drawer variant="persistent" anchor="left" open={menuOpen}>
        <Container>
          <TopContainer>
            <ToggleCameraLock />
          </TopContainer>
          <Info />
          {mode === "ai" && (
            <>
              <NewGameButton />
              <AiLevelSlider />
              <InviteButton />
            </>
          )}
          {mode === "pvp" && (
            <>
              <LeaveButton />
            </>
          )}
        </Container>
      </Drawer>
    </>
  );
});
