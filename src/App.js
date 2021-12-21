import { Suspense } from "react";
import { AppContainer } from "./AppStyle";
import Check from "./Components/Check/Check";
import CurrentPlayer from "./Components/CurrentPlayer/CurrentPlayer";
import TestBoard from "./Components/TestBoard/TestBoard";
import Three from "./Components/Three/Three";

export default function App() {
  return (
    <>
      <AppContainer>
        {/* <CurrentPlayer />
        <Check />
        <TestBoard /> */}
      </AppContainer>
      <Suspense fallback={null}>
        <Three />
      </Suspense>
    </>
  );
}
