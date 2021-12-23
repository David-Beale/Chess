import { memo, useRef } from "react";
import { useStore } from "../../../../../Store/store";
import { useFloating } from "./useFloating";
import { useMove } from "./useMove";

export default memo(function Piece({ object, location, selected }) {
  const pieceRef = useRef();
  const setCurrent = useStore((state) => state.setCurrent);

  useFloating(pieceRef, selected);
  useMove(pieceRef, location);

  const onClick = (e) => {
    e.stopPropagation();
    setCurrent(location);
  };
  if (!location) return null;
  return (
    <group ref={pieceRef} onClick={onClick}>
      <mesh
        scale={[100, 100, 100]}
        rotation={[-Math.PI / 2, 0, object.rotation]}
        castShadow
        geometry={object.geometry}
        material={object.material}
      />
    </group>
  );
});
