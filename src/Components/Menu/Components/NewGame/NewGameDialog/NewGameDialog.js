import { forwardRef } from "react";
import { Dialog, Zoom } from "@material-ui/core";
import { useStore } from "../../../../../Store/store";
import { ButtonsContainer, Container, Button } from "./NewGameDialogStyle";

const Transition = forwardRef(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />;
});

export default function NewGameDialog({ open, setOpen }) {
  const startNewGame = useStore((state) => state.startNewGame);
  const setPlayerColor = useStore((state) => state.setPlayerColor);
  const setMode = useStore((state) => state.setMode);

  const onClose = () => {
    setOpen(false);
  };
  const onSelectWhite = () => {
    startNewGame("white");
    setPlayerColor("white");
    setMode("ai");
  };
  const onSelectBlack = () => {
    startNewGame("black");
    setPlayerColor("black");
    setMode("ai");
  };
  return (
    <Dialog
      onClick={onClose}
      onClose={onClose}
      open={open}
      TransitionComponent={Transition}
      maxWidth={false}
    >
      <Container>
        Choose Side
        <ButtonsContainer>
          <Button onClick={onSelectWhite} color="white">
            White
          </Button>
          <Button onClick={onSelectBlack} color="black">
            Black
          </Button>
        </ButtonsContainer>
      </Container>
    </Dialog>
  );
}
