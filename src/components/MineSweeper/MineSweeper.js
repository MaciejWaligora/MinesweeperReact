import Logic from "./gamelogic/logic";
import GameArena from "./GameArena";

export default function MineSweeper({ resolution, size }) {
  let game = new Logic(resolution);
  return (
    <>
      <GameArena resolution={resolution} size={size} game={game}></GameArena>
    </>
  );
}
