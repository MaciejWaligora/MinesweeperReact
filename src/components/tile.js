import { useState } from "react";
import { Tiles } from "./Labels/Tiles";

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
        onClick={reveal}
        onContextMenu={setFlag}
      ></rect>
    ),
    background: (
      <rect
        x={0}
        y={0}
        width={width}
        height={width}
        fill={"lightBlue"}
        stroke={"grey"}
      ></rect>
    ),
  });

  function reveal() {
    let val = check();
    let label = properties.background;
    switch (val) {
      case "":
        label = properties.background;
        break;
      case 1:
        label = (
          <>
            {properties.background}
            {Tiles.one}
          </>
        );
        break;
      case 2:
        label = (
          <>
            {properties.background}
            {Tiles.two}
          </>
        );
        break;
      case 3:
        label = (
          <>
            {properties.background}
            {Tiles.three}
          </>
        );
        break;
      case 4:
        label = (
          <>
            {properties.background}
            {Tiles.four}
          </>
        );
        break;
      case 5:
        label = (
          <>
            {properties.background}
            {Tiles.five}
          </>
        );
        break;
      case 6:
        label = (
          <>
            {properties.background}
            {Tiles.six}
          </>
        );
        break;
      case 7:
        label = (
          <>
            {properties.background}
            {Tiles.seven}
          </>
        );
        break;
      case 8:
        label = (
          <>
            {properties.background}
            {Tiles.eight}
          </>
        );
        break;
      case "*":
        label = (
          <>
            {properties.background}
            {Tiles.bomb}
          </>
        );

        break;
    }
    setProperties({
      fill: "lightBlue",
      stroke: "grey",
      label: label,
    });
  }
  function setFlag(e) {
    e.preventDefault();
    let label = (
      <>
        {properties.label}
        {Tiles.flag}
      </>
    );
    setProperties({
      fill: "white",
      stroke: "grey",
      label: label,
    });
  }

  let translate = `translate(${x}, ${y})`;
  return <g transform={translate}>{properties.label}</g>;
};

export default Tile;
