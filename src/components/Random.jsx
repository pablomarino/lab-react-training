import './Random.css'
function Random({ min, max }) {
  return (
    <p className="randomcard">
      Random value between <span class="number">{min}</span> and <span class="number">{max}</span> = <span class="number">{
        Math.floor(Math.random() * (max - min + 1)) + min
      }</span>
    </p>
  );
}

export default Random;