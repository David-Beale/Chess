import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const setSource = (source, pieceRef) => {
  source.current.rX = pieceRef.current.rotation.x;
  source.current.rY = pieceRef.current.rotation.y;
  source.current.rZ = pieceRef.current.rotation.z;
  source.current.pY = pieceRef.current.position.y;
};
const interpolate = (p, from, to) => {
  return (1 - p) * from + p * to;
};
const interpolateFloating = (p, source, pieceRef, target) => {
  const { rX, rY, rZ, pY } = source.current;
  const { tRX, tRY, tRZ, tPY } = target.current;
  pieceRef.current.rotation.x = interpolate(p, rX, tRX);
  pieceRef.current.rotation.y = interpolate(p, rY, tRY);
  pieceRef.current.rotation.z = interpolate(p, rZ, tRZ);
  pieceRef.current.position.y = interpolate(p, pY, tPY);
};

const update = (pieceRef, target) => {
  const { tRX, tRY, tRZ, tPY } = target.current;
  pieceRef.current.rotation.x = tRX;
  pieceRef.current.rotation.y = tRY;
  pieceRef.current.rotation.z = tRZ;
  pieceRef.current.position.y = tPY;
};
const speed = 2;
const rotationIntensity = 1;
const floatIntensity = 3;

const setTarget = ({ t, target }) => {
  if (t) {
    target.current.tRX = (Math.cos((t / 4) * speed) / 8) * rotationIntensity;
    target.current.tRY = (Math.sin((t / 4) * speed) / 8) * rotationIntensity;
    target.current.tRZ = (Math.sin((t / 4) * speed) / 20) * rotationIntensity;
    target.current.tPY = 3 + (Math.sin((t / 4) * speed) / 10) * floatIntensity;
  } else {
    target.current.tRX = 0;
    target.current.tRY = 0;
    target.current.tRZ = 0;
    target.current.tPY = 0;
  }
};

export const useFloating = (pieceRef, selected) => {
  const prevFloating = useRef(null);
  const progress = useRef(0);
  const source = useRef({});
  const target = useRef({});

  useFrame((state) => {
    if (!pieceRef.current) return;
    if (selected) {
      if (!prevFloating.current) {
        prevFloating.current = true;
        setSource(source, pieceRef);
      }

      setTarget({ t: state.clock.getElapsedTime(), target });

      if (progress.current < 1) {
        progress.current += 0.08;
        if (progress.current > 1) progress.current = 1;
        interpolateFloating(progress.current, source, pieceRef, target);
      } else {
        update(pieceRef, target);
      }
    } else {
      if (progress.current <= 0) return;
      if (prevFloating.current) {
        prevFloating.current = false;
        setSource(source, pieceRef);
      }

      setTarget({ target });
      progress.current -= 0.08;
      if (progress.current < 0) progress.current = 0;
      interpolateFloating(1 - progress.current, source, pieceRef, target);
    }
  });
};
