import Header from './components/Header'
import GameArena from './components/GameArena';
import Arena from './gamelogic/logic';
import Button from './components/StartButton';

let res = 30;
let size = 600;


let start = (r) => {
  return new Arena(r);
}
let arena = start(res);

function App() {

  return (
    <div className="container">
      <div>
        <Header title='Testing'></Header>
        <Button title= 'Start' onClick={start}></Button>
      </div>
      <GameArena resolution = {arena.resolution} size = {`${size}`} game = {arena}></GameArena>
    </div>
  );
}


export default App;
