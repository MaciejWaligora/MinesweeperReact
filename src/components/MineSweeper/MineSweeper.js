import Logic from "./gamelogic/logic";
import GameArena from "./GameArena";

export default function MineSweeper({ resolution, difficulty }) {
  let game = new Logic(resolution, difficulty);
  return (
    <>
      <GameArena resolution={resolution} game={game}></GameArena>
    </>
  );
}
