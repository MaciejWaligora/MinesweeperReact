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
