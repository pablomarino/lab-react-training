import './BoxColor.css';

function componentToHex(component) {
  var hex = component.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(red, green, blue) {
  var redHex = componentToHex(red);
  var greenHex = componentToHex(green);
  var blueHex = componentToHex(blue);
  return "#" + redHex + greenHex + blueHex;
}

function BoxColor({ r, g, b }) {
  return (
      <>
      <div className="boxcolorcard" style={{
        backgroundColor: `rgb(${r},${g},${b})`
      }}>
        <p>BoxColor RGB({r},{g},{b})</p>
        <p>{rgbToHex(r,g,b)}</p>
      </div>
      </>
  )
}



export default BoxColor