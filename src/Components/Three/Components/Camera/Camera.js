import { OrbitControls } from "@react-three/drei";
import { useStore } from "../../../../Store/store";

export default function Camera() {
  const cameraEnabled = useStore((state) => state.cameraEnabled);
  if (!cameraEnabled) return null;
  return <OrbitControls target={[0, 0, 0]} />;
}
