import { Title } from "../../InviteDialogStyle";
import { Button, ButtonsContainer } from "./ColorSelectStyle";

export default function ColorSelect({ setColor, newGame }) {
  const requestGameId = (color) => {
    newGame(color);
  };
  const onSelectWhite = () => {
    setColor("white");
    requestGameId("white");
  };
  const onSelectBlack = () => {
    setColor("black");
    requestGameId("black");
  };
  return (
    <>
      <Title>Choose Side</Title>
      <ButtonsContainer>
        <Button onClick={onSelectWhite} color="white">
          White
        </Button>
        <Button onClick={onSelectBlack} color="black">
          Black
        </Button>
      </ButtonsContainer>
    </>
  );
}
