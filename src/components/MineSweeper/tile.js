import { useState } from "react";
import { Label } from "./Labels/Labels";
import "./css/Tiles.css";

const Tile = ({ y, x, width, val, check }) => {
  let [flagged, setFlagged] = useState(false);
  let scale = `scale(${width / 20})`;

  function setFlag(e) {
    e.preventDefault();
    !flagged ? setFlagged(true) : setFlagged(false);
  }
  if (flagged) {
    val = "flag";
  }

  let translate = `translate(${x}, ${y})`;
  return (
    <g transform={translate + scale}>
      <Label
        value={val}
        width={width}
        clickHandler={check}
        onContextMenuHanlder={setFlag}
      ></Label>
    </g>
  );
};

export default Tile;
