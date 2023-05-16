import { useState } from "react";
import Tile from "./tile.js";

function GameArena({ resolution, size, game }) {
  let grid = game.createGridArr();
  grid = grid();

  const [gridState, setGridState] = useState(grid);

  let rectWidth = parseInt(size) / resolution;

  return (
    <div className="gameArena">
      <div width="100%">
        <svg
          id="Arena"
          style={{ display: "block", width: `${size}px`, height: `${size}px` }}
        >
          {grid.map((row, i) => {
            return (
              <g key={`${i}`}>
                {row.map((cell, ii) => {
                  let posX = ii * rectWidth;
                  let posY = i * rectWidth;

                  function check() {
                    let val = game.check(i, ii);
                    let newGrid = [...gridState.map((row) => [...row])];
                    if (val === "") {
                      val = "0";
                      newGrid[i][ii] = val;
                      let outputGrid = checkThyNeighbor(newGrid, ii, i);
                      setGridState(outputGrid);
                    } else if (val === "*") {
                      newGrid[i][ii] = val;
                      setGridState(newGrid);
                    } else {
                      val = val.toString();
                      newGrid[i][ii] = val;
                      setGridState(newGrid);
                    }
                  }

                  function checkThyNeighbor(grid, x, y) {
                    let neighbours = [
                      [y - 1, x - 1],
                      [y - 1, x],
                      [y - 1, x + 1],
                      [y, x - 1],
                      [y, x + 1],
                      [y + 1, x - 1],
                      [y + 1, x],
                      [y + 1, x + 1],
                    ];
                    let values = [];

                    for (let n of neighbours) {
                      if (
                        n[0] >= 0 &&
                        n[0] < resolution &&
                        n[1] >= 0 &&
                        n[1] < resolution
                      ) {
                        values.push([game.check(n[0], n[1]), ...n]);
                      }
                    }

                    for (let n of values) {
                      if (n[0] !== "*" && grid[n[1]][n[2]] === "") {
                        if (n[0] === "") {
                          grid[n[1]][n[2]] = "0";
                          grid = checkThyNeighbor(grid, n[2], n[1]);
                        } else {
                          grid[n[1]][n[2]] = n[0].toString();
                        }
                      }
                    }

                    return grid;
                  }

                  // function update(newGrid, val) {
                  //   switch (val) {
                  //     case "":
                  //       newGrid[i][ii] = "0";
                  //       setGridState(newGrid);
                  //       break;
                  //     case 1:
                  //       newGrid[i][ii] = "1";
                  //       setGridState(newGrid);
                  //       break;
                  //     case 2:
                  //       newGrid[i][ii] = "2";
                  //       setGridState(newGrid);
                  //       break;
                  //     case 3:
                  //       newGrid[i][ii] = "3";
                  //       setGridState(newGrid);
                  //       break;
                  //     case 4:
                  //       newGrid[i][ii] = "4";
                  //       setGridState(newGrid);
                  //       break;
                  //     case 5:
                  //       newGrid[i][ii] = "5";
                  //       setGridState(newGrid);
                  //       break;
                  //     case 6:
                  //       newGrid[i][ii] = "6";
                  //       setGridState(newGrid);
                  //       break;
                  //     case 7:
                  //       newGrid[i][ii] = "7";
                  //       setGridState(newGrid);
                  //       break;
                  //     case 8:
                  //       newGrid[i][ii] = "8";
                  //       setGridState(newGrid);
                  //       break;
                  //     case "*":
                  //       newGrid[i][ii] = "*";
                  //       setGridState(newGrid);
                  //       break;
                  //   }
                  // }

                  return (
                    <Tile
                      x={posX}
                      y={posY}
                      width={rectWidth}
                      key={`${i}:${ii}`}
                      check={check}
                      val={gridState[i][ii]}
                    ></Tile>
                  );
                })}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

export default GameArena;

//let checkThyNeighbor = () => {
//   let neighbours = [
//     [i - 1, ii - 1],
//     [i - 1, ii],
//     [i - 1, ii + 1],
//     [i, ii - 1],
//     [i, ii + 1],
//     [i + 1, ii - 1],
//     [i + 1, ii],
//     [i + 1, ii + 1],
//   ];
//   let output = [];

//   for (let n of neighbours) {
//     if (n[0] >= 0 && n[1] >= 0) {
//       output.push([game.check(n[0], n[1]), ...n]);
//     }
//   }

//   for (let n of output) {
//     if (n[0] !== "*" && gridState[n[1]][n[2]] === "") {
//       let newGrid = [...gridState];
//       newGrid[n[1]][n[2]] = "1";
//       setGridState(newGrid);
//     }
//   }
// };

// function setFlag(e) {
//   e.preventDefault();
//   let label = (
//     <>
//       {label}
//       {Tiles.flag}
//     </>
//   );
// }
