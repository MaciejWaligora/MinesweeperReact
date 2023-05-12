

const Tile = ({y,x,width, handler}) => {


  return (
    <rect x = {x} y = {y} width = {width} height = {width} fill = 'white' stroke = 'grey' key = {`${y}:${x}`} className = 'tile' onClick = {handler}></rect>
  )
}

export default Tile
