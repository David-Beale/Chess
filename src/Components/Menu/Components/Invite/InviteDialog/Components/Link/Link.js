import { Tooltip } from "@material-ui/core";

import { useStore } from "../../../../../../../Store/store";
import { Progress } from "../../../../../MenuStyle";
import { Title } from "../../InviteDialogStyle";
import { CopyIcon, Inset } from "./LinkStyle";

export default function Link() {
  const link = useStore((state) => state.link);

  const onClick = () => {
    navigator.clipboard.writeText(link);
  };
  return (
    <>
      <Title>Invite link:</Title>
      <Inset height={40} align={"flex-start"}>
        {link || <Progress size={20} />}
        <Tooltip title="Copy">
          <CopyIcon onClick={onClick} />
        </Tooltip>
      </Inset>
      <Title>Waiting for opponent...</Title>
      <Progress />
    </>
  );
}
