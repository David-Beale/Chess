import { useEffect, useRef } from "react";

const MIN = -20.8;
const SIZE = 5.94;

const colToIndex = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
  F: 5,
  G: 6,
  H: 7,
};
const rowToIndex = {
  8: 0,
  7: 1,
  6: 2,
  5: 3,
  4: 4,
  3: 5,
  2: 6,
  1: 7,
};
const convertLocationToWorld = (location) => {
  const colIndex = colToIndex[location[0]];
  const rowIndex = rowToIndex[location[1]];
  return [MIN + colIndex * SIZE, MIN + rowIndex * SIZE];
};

export default function Piece({ object, location }) {
  const pieceRef = useRef();
  useEffect(() => {
    const [x, z] = convertLocationToWorld(location);
    pieceRef.current.position.x = x;
    pieceRef.current.position.z = z;
  }, [location]);
  return (
    <group
      ref={pieceRef}
      rotation={[-Math.PI / 2, 0, object.rotation]}
      scale={[100, 100, 100]}
    >
      <mesh castShadow geometry={object.geometry} material={object.material} />
    </group>
  );
}
