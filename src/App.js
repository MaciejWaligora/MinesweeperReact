import Header from "./components/Header";
import GameArena from "./components/GameArena";
import Arena from "./gamelogic/logic";
import Button from "./components/StartButton";
import { useState } from "react";

function App({ size = 600, res = 30 }) {
  let [game, newGame] = useState(new Arena(res));
  let [gameKey, setGameKey] = useState(0);

  const restartGame = () => {
    newGame(new Arena(res));
    setGameKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="container">
      <div>
        <Header title="Testing"></Header>
        <Button title="New Game" onClick={restartGame}></Button>
      </div>
      <GameArena
        key={gameKey}
        resolution={res}
        size={`${size}`}
        game={game}
      ></GameArena>
    </div>
  );
}

export default App;
