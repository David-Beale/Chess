import { Suspense } from "react";
import { AppContainer } from "./AppStyle";
import Menu from "./Components/Menu/Menu";
import Three from "./Components/Three/Three";
import useBoard from "./hooks/useBoard";

export default function App() {
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
