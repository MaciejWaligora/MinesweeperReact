import Tile from "./tile";


function GameArena({resolution, size, game}) {
let grid = ((res) =>{
  let gridArr = [];
        let line = [];
            for(let i=0; i< res; i++){
                line.push('')
            }
            for(let i=0; i< res; i++){
                let newLine = [...line]
                gridArr.push(newLine)
            }
        return gridArr
})(resolution);
let rectWidth = parseInt(size)/resolution;


  return (
    <div className='gameArena'>
      <div width='100%'  >
      <svg id = 'Arena' style={{display: 'block',width:`${size}px`,height:`${size}px`}}>
        {
          grid.map((row, i) => {
            return <g key = {`${i}`}>
                {
                  row.map((cell, ii) =>{
                    let posX = ii * rectWidth;
                    let posY = i * rectWidth;
                    const Tilehandler = () => {
                      console.log(game.check(i, ii));
                    }
                     return <Tile x ={posX} y= {posY} width ={rectWidth} key = {`${i}:${ii}`} handler = {Tilehandler}></Tile>
                  })
                }
            </g>
          })
        }

        </svg>
      </div>
        
    </div>
  )
}

export default GameArena
