import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

const setSource = (source, pieceRef) => {
  source.current.rX = pieceRef.current.rotation.x;
  source.current.rY = pieceRef.current.rotation.y;
  source.current.rZ = pieceRef.current.rotation.z;
  source.current.pY = pieceRef.current.position.y;
};

const interpolate = (p, source, pieceRef, target) => {
  const { rX, rY, rZ, pY } = source.current;
  const { tRX, tRY, tRZ, tPY } = target;
  pieceRef.current.rotation.x = (1 - p) * rX + p * tRX;
  pieceRef.current.rotation.y = (1 - p) * rY + p * tRY;
  pieceRef.current.rotation.z = (1 - p) * rZ + p * tRZ;
  pieceRef.current.position.y = (1 - p) * pY + p * tPY;
};
const update = (pieceRef, target) => {
  const { tRX, tRY, tRZ, tPY } = target;
  pieceRef.current.rotation.x = tRX;
  pieceRef.current.rotation.y = tRY;
  pieceRef.current.rotation.z = tRZ;
  pieceRef.current.position.y = tPY;
};
const speed = 2;
const rotationIntensity = 1;
const floatIntensity = 3;

const getTarget = (t) => {
  if (t) {
    return {
      tRX: (Math.cos((t / 4) * speed) / 8) * rotationIntensity,
      tRY: (Math.sin((t / 4) * speed) / 8) * rotationIntensity,
      tRZ: (Math.sin((t / 4) * speed) / 20) * rotationIntensity,
      tPY: 3 + (Math.sin((t / 4) * speed) / 10) * floatIntensity,
    };
  }
  return {
    tRX: 0,
    tRY: 0,
    tRZ: 0,
    tPY: 0,
  };
};

export const useFloating = (pieceRef, selected) => {
  const prevFloating = useRef(false);
  const progress = useRef(0);
  const source = useRef({});

  useFrame((state) => {
    if (!pieceRef.current) return;
    if (selected) {
      if (!prevFloating.current) {
        prevFloating.current = true;
        setSource(source, pieceRef);
      }

      const target = getTarget(state.clock.getElapsedTime());

      if (progress.current < 1) {
        progress.current += 0.08;
        if (progress.current > 1) progress.current = 1;
        interpolate(progress.current, source, pieceRef, target);
        return;
      }
      update(pieceRef, target);
    } else {
      if (progress.current <= 0) return;
      if (prevFloating.current) {
        prevFloating.current = false;
        setSource(source, pieceRef);
      }

      const target = getTarget();
      progress.current -= 0.08;
      if (progress.current < 0) progress.current = 0;
      interpolate(1 - progress.current, source, pieceRef, target);
      return;
    }
  });
};
