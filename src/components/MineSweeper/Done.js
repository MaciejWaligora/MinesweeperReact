import("./css/Done.css");
export default function Done({ size, msg }) {
  return (
    <>
      <div
        style={{ width: `${size}px`, height: `${size}px` }}
        className="GameOver"
      >
        {msg}
      </div>
    </>
  );
}
