import { forwardRef, useCallback, useEffect, useState } from "react";
import { Dialog, Zoom } from "@material-ui/core";
import { Container } from "./InviteDialogStyle";
import ColorSelect from "./Components/ColorSelect/ColorSelect";
import Loading from "./Components/Loading/Loading";
import { useStore } from "../../../../../Store/store";
import Link from "./Components/Link/Link";

const Transition = forwardRef(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />;
});

export default function NewGameDialog({ open, setOpen, newGame }) {
  const startNewGame = useStore((state) => state.startNewGame);
  const setPlayerColor = useStore((state) => state.setPlayerColor);
  const setMode = useStore((state) => state.setMode);
  const connected = useStore((state) => state.connected);
  const link = useStore((state) => state.link);
  const partnerConnected = useStore((state) => state.partnerConnected);

  const [stage, setStage] = useState(0);
  const [color, setColor] = useState(null);

  const onClose = useCallback(() => {
    setOpen(false);
    setColor(null);
  }, [setOpen]);

  useEffect(() => {
    if (!connected) setStage(0);
    else if (!color) setStage(1);
    else setStage(2);
  }, [color, connected, link]);

  useEffect(() => {
    if (!partnerConnected || !color) return;
    startNewGame(color);
    setPlayerColor(color);
    setMode("pvp");
    onClose();
  }, [partnerConnected, onClose, setPlayerColor, startNewGame, setMode, color]);

  return (
    <Dialog
      onClose={onClose}
      open={open}
      TransitionComponent={Transition}
      maxWidth={false}
    >
      <Container>
        {
          {
            0: <Loading />,
            1: <ColorSelect setColor={setColor} newGame={newGame} />,
            2: <Link />,
          }[stage]
        }
      </Container>
    </Dialog>
  );
}
