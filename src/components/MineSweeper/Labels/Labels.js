export function Label({
  value,
  width,
  strokeWidth = 2,
  clickHandler,
  onContextMenuHanlder,
}) {
  const background = (
    <rect
      x={0}
      y={0}
      width={width}
      height={width}
      fill={"lightBlue"}
      stroke={"grey"}
    ></rect>
  );
  const bmbBackground = (
    <rect
      x={0}
      y={0}
      width={width}
      height={width}
      fill={"red"}
      stroke={"grey"}
    ></rect>
  );
  switch (value) {
    case "0":
      return <>{background}</>;
    case "1":
      return (
        <>
          {background}
          <path
            d="M5 10 L10 3 L10 17"
            stroke="blue"
            fill="transparent"
            strokeWidth={strokeWidth}
          />
        </>
      );
    case "2":
      return (
        <>
          {background}
          <path
            d="M 6 8 C 8 2, 12 2, 14 8 L6 16 14 16"
            stroke="green"
            fill="transparent"
            strokeWidth={strokeWidth}
          />
        </>
      );
    case "3":
      return (
        <>
          {background}
          <path
            d="M 6 6 C 8 2, 12 2, 14 6 L10 10 C16 13, 10 18, 6 13  "
            stroke="red"
            fill="transparent"
            strokeWidth={strokeWidth}
          />
        </>
      );
    case "4":
      return (
        <>
          {background}
          <path
            d="M 10 2 C8 6, 7 8, 4 13 L 14 12"
            stroke="black"
            fill="transparent"
            strokeWidth={strokeWidth}
          />
          <path
            d="M 11 8 9 18"
            stroke="black"
            fill="transparent"
            strokeWidth={strokeWidth}
          ></path>
        </>
      );
    case "5":
      return (
        <>
          {background}
          <path
            d="M 16 2 C12 3, 6 3, 4 3 L4 3 C5 6, 5 10, 3 13 L3 13 C6 8, 10 6, 15 13 L15 13 C15 15, 12 16, 10 18 L10 18 C8 17, 5 16, 4 15 "
            stroke="brown"
            fill="transparent"
            strokeWidth={strokeWidth}
          />
        </>
      );
    case "6":
      return (
        <>
          {background}
          <path
            d="M15 4 C14 3, 12 2, 10 2  L10 2 C8 3, 6 4, 4 6 L4 6 C3 8, 2 10, 3 12 L3 12 C3 14, 4 15, 5 16 L5 16 C6 17, 7 18, 10 17 L10 17 C12 16, 13 15, 14 14 L14 14 C15 13, 14 12, 13 11 L13 11 C12 10, 10 11, 8 12 L8 12 C6 13, 5 14, 4 15"
            stroke="purple"
            fill="transparent"
            strokeWidth={strokeWidth}
          />
        </>
      );
    case "7":
      return (
        <>
          {background}
          <path
            d="M3 2 C8 3, 13 3, 16 2 L16 2 C14 6, 8 12, 5 16"
            stroke="purple"
            fill="transparent"
            strokeWidth={strokeWidth}
          />
          <path
            d="M5 10 14 11"
            stroke="purple"
            fill="transparent"
            strokeWidth={strokeWidth}
          />
        </>
      );
    case "8":
      return (
        <>
          {background}
          <path
            d="M10 2 C8 3, 6 4, 5 7 L5 7 C6 8, 7 9, 8 10 L8 10 C 10 11, 12 13, 15 14 L15 14 C13 15, 12 16, 10 18 L10 18 C7 17, 6 14, 5 13 L5 13 C6 12, 7 11, 8 10 L8 10 C10 9, 13 6, 14 6 L14 6 C13 4, 12 3, 10 2"
            stroke="purple"
            fill="transparent"
            strokeWidth={strokeWidth}
          />
        </>
      );
    case "*":
      return (
        <>
          {bmbBackground}
          <circle cx="10" cy="10" r="6" stroke="DimGray" fill="DimGray" />
          <path
            d="M10 2 10 18 "
            stroke="DimGray"
            fill="transparent"
            strokeWidth="2"
          />
          <path
            d="M2 10 18 10 "
            stroke="DimGray"
            fill="transparent"
            strokeWidth="2"
          />
          <path
            d="M4 4 16 16 "
            stroke="DimGray"
            fill="transparent"
            strokeWidth="2"
          />
          <path
            d="M4 16 16 4 "
            stroke="DimGray"
            fill="transparent"
            strokeWidth="2"
          />
        </>
      );
    case "flag":
      return (
        <>
          <rect
            x={0}
            y={0}
            width={width}
            height={width}
            fill="lightGrey"
            stroke="grey"
            onContextMenu={onContextMenuHanlder}
          ></rect>
          <path
            d="M5 16 5 3 L15 5 5 9"
            stroke="Brown"
            fill="brown"
            strokeWidth={strokeWidth}
            onContextMenu={onContextMenuHanlder}
          />
        </>
      );
    default:
      return (
        <>
          <rect
            x={0}
            y={0}
            width={width}
            height={width}
            fill="lightGrey"
            stroke="white"
            className="tile"
            onClick={clickHandler}
            onContextMenu={onContextMenuHanlder}
          ></rect>
          <line
            x1={1}
            y1={1}
            x2={width - 1}
            y2={1}
            stroke="#FFFFFF"
            strokeWidth="1"
          />
          <line
            x1={1}
            y1={1}
            x2={1}
            y2={width - 1}
            stroke="#FFFFFF"
            strokeWidth="1"
          />

          <line
            x1={1}
            y1={width - 1}
            x2={width - 1}
            y2={width - 1}
            stroke="#808080"
            strokeWidth="1"
          />
          <line
            x1={width - 1}
            y1={1}
            x2={width - 1}
            y2={width - 1}
            stroke="#808080"
            strokeWidth="1"
          />
        </>
      );
  }
}
