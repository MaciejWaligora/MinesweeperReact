import Header from "./components/Header";
import GameArena from "./components/GameArena";
import Arena from "./gamelogic/logic";
import Button from "./components/StartButton";
import { useState } from "react";

function App({ size = 600, res = 30 }) {
  let [game, newGame] = useState(new Arena(res));
  return (
    <div className="container">
      <div>
        <Header title="Testing"></Header>
        <Button
          title="Start"
          onClick={() => {
            newGame(new Arena(res));
          }}
        ></Button>
      </div>
      <GameArena resolution={res} size={`${size}`} game={game}></GameArena>
    </div>
  );
}

export default App;
