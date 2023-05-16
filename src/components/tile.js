import { Tiles } from "./Labels/Tiles";

const Tile = ({ y, x, width, val, check }) => {
  let label;

  let background = (
    <rect
      x={0}
      y={0}
      width={width}
      height={width}
      fill={"lightBlue"}
      stroke={"grey"}
    ></rect>
  );
  switch (val) {
    case "0":
      label = background;
      break;
    case "1":
      label = (
        <>
          {background}
          {Tiles.one}
        </>
      );
      break;
    case "2":
      label = (
        <>
          {background}
          {Tiles.two}
        </>
      );
      break;
    case "3":
      label = (
        <>
          {background}
          {Tiles.three}
        </>
      );
      break;
    case "4":
      label = (
        <>
          {background}
          {Tiles.four}
        </>
      );
      break;
    case "5":
      label = (
        <>
          {background}
          {Tiles.five}
        </>
      );
      break;
    case "6":
      label = (
        <>
          {background}
          {Tiles.six}
        </>
      );
      break;
    case "7":
      label = (
        <>
          {background}
          {Tiles.seven}
        </>
      );
      break;
    case "8":
      label = (
        <>
          {background}
          {Tiles.eight}
        </>
      );
      break;
    case "*":
      label = (
        <>
          {background}
          {Tiles.bomb}
        </>
      );
      break;
    default:
      label = (
        <rect
          x={0}
          y={0}
          width={width}
          height={width}
          fill="white"
          stroke="grey"
          key={`${y}:${x}`}
          className="tile"
          onClick={check}
          //onContextMenu={setFlag}
        ></rect>
      );
  }

  let translate = `translate(${x}, ${y})`;
  return <g transform={translate}>{label}</g>;
};

export default Tile;
