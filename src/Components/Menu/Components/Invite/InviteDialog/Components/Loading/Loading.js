import { Progress } from "../../../../../MenuStyle";
import { Title } from "../../InviteDialogStyle";

export default function Loading() {
  return (
    <>
      <Title>Initializing Server</Title>
      <Progress />
    </>
  );
}
