import "./NumbersTable.css"
function NumbersTable({limit}) {
  return (
    <div className="numberstablecard">
      {Array.from({length: limit}, (_, index) => index + 1).map((number) => (
        <div className="number" style={{color: (number % 2 === 0)?'white':'red',backgroundColor: (number % 2 === 0)?'red':'white'}}>{number}</div>
      ))}
    </div>
)}

export default NumbersTable