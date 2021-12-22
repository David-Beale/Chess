import { useEffect, useRef } from "react";
import { useStore } from "../../../../../Store/store";
import { convertLocationToWorld } from "../../../convertLocationToWorld";
import { useFloating } from "./useFloating";

export default function Piece({ object, location, selected }) {
  const pieceRef = useRef();
  const setCurrent = useStore((state) => state.setCurrent);

  useEffect(() => {
    const [x, z] = convertLocationToWorld(location);
    pieceRef.current.position.x = x;
    pieceRef.current.position.z = z;
  }, [location]);

  useFloating(pieceRef, selected);

  const onClick = (e) => {
    e.stopPropagation();
    setCurrent(location);
  };
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
}
