import Header from "./components/Header";
import MineSweeper from "./components/MineSweeper/MineSweeper";
import Button from "./components/StartButton";
import { useState } from "react";

function App({ size = 600, res = 30 }) {
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
        size={`${size}`}
      ></MineSweeper>
    </div>
  );
}

export default App;
