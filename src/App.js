import { Suspense } from "react";
import { AppContainer } from "./AppStyle";
import Check from "./Components/Check/Check";
import CurrentPlayer from "./Components/CurrentPlayer/CurrentPlayer";
import Three from "./Components/Three/Three";
import useBoard from "./hooks/useBoard";

export default function App() {
  useBoard();
  return (
    <>
      <AppContainer>
        {/* <CurrentPlayer />
        <Check /> */}
      </AppContainer>
      <Suspense fallback={null}>
        <Three />
      </Suspense>
    </>
  );
}
