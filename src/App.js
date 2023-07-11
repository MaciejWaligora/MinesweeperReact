import Header from "./components/Header";
import MineSweeper from "./components/MineSweeper/MineSweeper";
import Button from "./components/StartButton";
import { useState } from "react";

function App({ res = 10, diff_level = 1 }) {
  let [gameKey, setGameKey] = useState(0);

  const restartGame = () => {
    setGameKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="container">
      <div>
        <Header title="Testing"></Header>
        <Button title="New Game" onClick={restartGame}></Button>
      </div>
      <MineSweeper
        key={gameKey}
        resolution={res}
        difficulty={diff_level}
      ></MineSweeper>
    </div>
  );
}

export default App;
