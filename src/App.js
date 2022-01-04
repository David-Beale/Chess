import { Suspense } from "react";
import { AppContainer } from "./AppStyle";
import Check from "./Components/Check/Check";
import Menu from "./Components/Menu/Menu";
import Three from "./Components/Three/Three";
import useBoard from "./hooks/useBoard";

export default function App() {
  useBoard();
  return (
    <>
      <AppContainer>
        <Menu />
        {/*
        <Check /> */}
      </AppContainer>
      <Suspense fallback={null}>
        <Three />
      </Suspense>
    </>
  );
}
