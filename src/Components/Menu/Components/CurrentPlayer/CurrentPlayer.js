import React from "react";

import { Inset, SubContainer } from "../../MenuStyle";
import { useStore } from "../../../../Store/store";

export default function CurrentPlayer() {
  const currentPlayer = useStore((state) => state.currentPlayer);
  const myColor = useStore((state) => state.myColor);
  return (
    <SubContainer height={60}>
      <Inset>
        {currentPlayer === myColor
          ? "Your turn"
          : "Waiting for other player..."}
      </Inset>
    </SubContainer>
  );
}
