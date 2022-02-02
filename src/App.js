import { Suspense } from "react";
import { AppContainer } from "./AppStyle";
import Menu from "./Components/Menu/Menu";
import Notifications from "./Components/Popups/Notifications";
import Three from "./Components/Three/Three";
import useBoard from "./hooks/useBoard";
import { useJoinGame } from "./Socket/useJoinGame";

export default function App() {
  useJoinGame();
  useBoard();
  return (
    <>
      <AppContainer>
        <Menu />
        <Notifications />
      </AppContainer>
      <Suspense fallback={null}>
        <Three />
      </Suspense>
    </>
  );
}
