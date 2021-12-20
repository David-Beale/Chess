import { AppContainer } from "./AppStyle";
import Check from "./Components/Check/Check";
import CurrentPlayer from "./Components/CurrentPlayer/CurrentPlayer";
import TestBoard from "./Components/TestBoard/TestBoard";

export default function App() {
  return (
    <AppContainer>
      <CurrentPlayer />
      <Check />
      <TestBoard />
    </AppContainer>
  );
}
