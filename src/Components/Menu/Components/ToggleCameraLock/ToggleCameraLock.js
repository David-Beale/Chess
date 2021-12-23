import React from "react";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";

import { Tooltip } from "@material-ui/core";
import { StyledIconButtonTop } from "../ToggleButtonStyle";
import { useStore } from "../../../../Store/store";

export default function ToggleCameraLock() {
  const enabled = useStore((state) => state.cameraEnabled);
  const toggleCamera = useStore((state) => state.toggleCamera);

  const onClick = () => {
    toggleCamera();
  };
  return (
    <Tooltip title="Toggle camera lock">
      <StyledIconButtonTop enabled={enabled ? 1 : 0} onClick={onClick}>
        <PhotoCameraIcon />
      </StyledIconButtonTop>
    </Tooltip>
  );
}
