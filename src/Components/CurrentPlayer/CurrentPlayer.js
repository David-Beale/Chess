import { useStore } from "../../Store/store";

export default function CurrentPlayer() {
  const currentPlayer = useStore((state) => state.currentPlayer);
  const myColor = useStore((state) => state.myColor);
  return (
    <div>
      {currentPlayer === myColor ? "Your turn" : "Waiting for other player..."}
    </div>
  );
}
