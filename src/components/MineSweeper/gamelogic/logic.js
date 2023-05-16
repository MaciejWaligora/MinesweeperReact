export default class Logic {
  #grid;
  constructor(resolution) {
    this.resolution = resolution;
    this.bombCounter = 0;
    this.#grid = this.createGridArr();
    while (this.bombCounter < resolution * 5) {
      this.placeBomb();
    }
    this.placeHints();
  }

  createGridArr() {
    let gridArr = [];
    let line = [];
    for (let i = 0; i < this.resolution; i++) {
      line.push("");
    }
    for (let i = 0; i < this.resolution; i++) {
      let newLine = [...line];
      gridArr.push(newLine);
    }

    let output = () => {
      return gridArr;
    };
    return output;
  }
  placeBomb(
    x = Math.floor(Math.random() * this.resolution),
    y = Math.floor(Math.random() * this.resolution)
  ) {
    if (this.#grid()[x][y] === "*") {
      this.placeBomb();
    } else {
      this.bombCounter += 1;
      this.#grid()[x][y] = "*";
    }
  }

  placeHints() {
    this.#grid().forEach((row, y) => {
      row.forEach((cell, x) => {
        let adjustcentBombs = 0;
        if (cell === "") {
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
          neighbours.forEach((neighbour) => {
            if (
              neighbour[0] >= 0 &&
              neighbour[1] >= 0 &&
              neighbour[0] <= this.#grid().length - 1 &&
              neighbour[1] <= this.#grid()[0].length - 1
            ) {
              if (this.#grid()[neighbour[0]][neighbour[1]] === "*") {
                adjustcentBombs += 1;
              }
            }
          });
          if (adjustcentBombs > 0) {
            this.#grid()[y][x] = adjustcentBombs;
          }
        }
      });
    });
  }

  check(y, x) {
    return this.#grid()[y][x];
  }
}
