import React from "react";

import { Inset, SubContainer } from "../../MenuStyle";
import { useStore } from "../../../../Store/store";

export default function CurrentPlayer() {
  const currentPlayer = useStore((state) => state.currentPlayer);
  const myColor = useStore((state) => state.myColor);
  const check = useStore((state) => state.check);
  const checkMate = useStore((state) => state.checkMate);
  return (
    <SubContainer height={80}>
      <Inset>
        {checkMate ? (
          <div>Checkmate!</div>
        ) : (
          <>
            {check && <div>Check!</div>}
            <div>
              {currentPlayer === myColor
                ? "Your turn"
                : "Waiting for other player..."}
            </div>
          </>
        )}
      </Inset>
    </SubContainer>
  );
}
