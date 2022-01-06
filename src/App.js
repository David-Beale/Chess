import { Suspense } from "react";
import { AppContainer } from "./AppStyle";
import Menu from "./Components/Menu/Menu";
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
      </AppContainer>
      <Suspense fallback={null}>
        <Three />
      </Suspense>
    </>
  );
}
