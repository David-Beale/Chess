import { useStore } from "../../Store/store";

export default function Check() {
  const check = useStore((state) => state.check);
  const checkMate = useStore((state) => state.checkMate);

  if (!check && !checkMate) return null;
  return <div>{check ? "Check!" : "Check Mate!"}</div>;
}
