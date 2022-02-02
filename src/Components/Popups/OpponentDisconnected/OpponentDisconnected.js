import { forwardRef, useEffect, useState } from "react";
import { Dialog, Zoom } from "@material-ui/core";
import { Container } from "./OpponentDisconnectedStyle";
import { useStore } from "../../../Store/store";

const Transition = forwardRef(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />;
});

export default function OpponentDisconnected() {
  const [open, setOpen] = useState(false);

  const opponentDisconnected = useStore((state) => state.opponentDisconnected);

  useEffect(() => {
    if (!opponentDisconnected[0]) return false;
    setOpen(true);
  }, [opponentDisconnected]);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      onClick={onClose}
      onClose={onClose}
      open={open}
      TransitionComponent={Transition}
      maxWidth={false}
    >
      <Container>Your opponent has disconnected 😟</Container>
    </Dialog>
  );
}
