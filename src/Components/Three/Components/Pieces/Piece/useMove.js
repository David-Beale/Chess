import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { convertLocationToWorld } from "../../../convertLocationToWorld";

const interpolate = (p, from, to) => {
  return (1 - p) * from + p * to;
};

const interpolatePosition = (p, source, pieceRef, target) => {
  const { pX, pZ } = source.current;
  const { tPX, tPZ } = target.current;
  if (pX === tPX && pZ === tPZ) return;
  pieceRef.current.position.x = interpolate(p, pX, tPX);
  pieceRef.current.position.z = interpolate(p, pZ, tPZ);
};

export const useMove = (pieceRef, location) => {
  const init = useRef(false);
  const progress = useRef(false);
  const source = useRef({});
  const target = useRef({});

  useEffect(() => {
    const [x, z] = convertLocationToWorld(location);
    if (!init.current) {
      pieceRef.current.position.x = x;
      pieceRef.current.position.z = z;
      init.current = true;
      target.current.tPX = x;
      target.current.tPZ = z;
    } else {
      progress.current = 0;
      source.current.pX = target.current.tPX;
      source.current.pZ = target.current.tPZ;
      target.current.tPX = x;
      target.current.tPZ = z;
    }
  }, [location, pieceRef]);

  useFrame(() => {
    if (!pieceRef.current || progress.current === false) return;

    progress.current += 0.08;
    if (progress.current > 1) progress.current = 1;
    interpolatePosition(progress.current, source, pieceRef, target);
    if (progress.current >= 1) progress.current = false;
  });
};
