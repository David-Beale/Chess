import React, { useCallback, useState } from "react";
import { useStore } from "../../../../Store/store";
import CustomSlider from "../../../../Styling/Components/CustomSlider";
import { SubContainer } from "../../MenuStyle";
import Label from "./Components/Label/Label";
import Thumb from "./Components/Thumb/Thumb";

export default function AiLevelSlider() {
  const [localSliderValue, setLocalSliderValue] = useState(0);
  const setAiLevel = useStore((state) => state.setAiLevel);

  const onChange = useCallback((e, value) => {
    setLocalSliderValue(value);
  }, []);
  const onConfirm = useCallback(
    (e, value) => {
      setAiLevel(value);
    },
    [setAiLevel]
  );

  return (
    <SubContainer height={90}>
      Difficulty
      <CustomSlider
        value={localSliderValue}
        min={0}
        max={3}
        step={1}
        onChange={onChange}
        onChangeCommitted={onConfirm}
        valueLabelDisplay="auto"
        ThumbComponent={Thumb}
        ValueLabelComponent={Label}
      />
    </SubContainer>
  );
}
