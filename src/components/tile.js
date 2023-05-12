import { useState } from "react";

const Tile = ({ y, x, width, check }) => {
  let [properties, setProperties] = useState({
    fill: "white",
    stroke: "grey",
    label: (
      <rect
        x={0}
        y={0}
        width={width}
        height={width}
        fill="white"
        stroke="grey"
        key={`${y}:${x}`}
        className="tile"
        onClick={face}
      ></rect>
    ),
  });

  function face() {
    let val = check();
    console.log(val);
    let x = 0;
    let y = 0;
    let background = (
      <rect
        x={x}
        y={y}
        width={width}
        height={width}
        fill={"lightBlue"}
        stroke={"grey"}
      ></rect>
    );

    let label = background;
    switch (val) {
      case "":
        label = background;
        break;
      case 1:
        label = (
          <>
            {background}
            <line
              x1={`${x + 5}`}
              y1={`${y + 10}`}
              x2={`${x + 10}`}
              y2={`${y + 3}`}
              stroke="black"
            ></line>
            <line
              x1={`${x + 10}`}
              y1={`${y + 3}`}
              x2={`${x + 10}`}
              y2={`${y + 17}`}
              stroke="black"
            ></line>
          </>
        );
        break;
      case 2:
        label = (
          <>
            {background}
            <path
              d="M 6 8 C 8 2, 12 2, 14 8 L6 16 14 16"
              stroke="black"
              fill="transparent"
            />
          </>
        );
        break;
      case 3:
        label = (
          <>
            {background}
            <path
              d="M 6 6 C 8 2, 12 2, 14 6 L10 10 C16 13, 10 18, 6 13  "
              stroke="black"
              fill="transparent"
            />
          </>
        );
        break;
      case 4:
        label = (
          <>
            {background}
            <path
              d="M 10 2 C8 6, 7 8, 4 13 L 14 12"
              stroke="black"
              fill="transparent"
            />
            <path d="M 11 8 9 18" stroke="black" fill="transparent"></path>
          </>
        );
        break;
      case 5:
        break;
      case 6:
        break;
      case 7:
        break;
      case 8:
        break;
      case "*":
        break;
    }
    setProperties({
      fill: "lightBlue",
      stroke: "grey",
      label: label,
    });
  }
  let translate = `translate(${x}, ${y})`;
  return <g transform={translate}>{properties.label}</g>;
};

export default Tile;
