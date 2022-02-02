import { forwardRef, useEffect, useState } from "react";
import { Dialog, Zoom } from "@material-ui/core";
import { Container } from "./NotificationsStyle";
import { useStore } from "../../Store/store";

const Transition = forwardRef(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />;
});

export default function Notifications() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(null);

  const opponentDisconnected = useStore((state) => state.opponentDisconnected);
  const errorJoining = useStore((state) => state.errorJoining);

  useEffect(() => {
    if (!opponentDisconnected[0]) return false;
    setMessage("Your opponent has disconnected 😟");
    setOpen(true);
  }, [opponentDisconnected]);

  useEffect(() => {
    if (!errorJoining[0]) return false;
    setMessage("Error joining game 😟");
    setOpen(true);
  }, [errorJoining]);

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
      <Container>{message}</Container>
    </Dialog>
  );
}
