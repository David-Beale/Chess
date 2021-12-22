import { Plane } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useStore } from "../../../../../Store/store";
import { convertLocationToWorld } from "../../../convertLocationToWorld";

export default function Move({ location }) {
  const setTarget = useStore((state) => state.setTarget);
  const moveRef = useRef();

  useEffect(() => {
    const [x, z] = convertLocationToWorld(location);
    moveRef.current.position.x = x;
    moveRef.current.position.y = 0.1;
    moveRef.current.position.z = z;
  }, [location]);

  const onClick = () => {
    setTarget(location);
  };

  return (
    <Plane
      ref={moveRef}
      args={[5.94, 5.94]}
      rotation={[-Math.PI / 2, 0, 0]}
      onClick={onClick}
      position={[0, -100, 0]}
    >
      <meshStandardMaterial color="green" transparent opacity={0.4} />
    </Plane>
  );
}
