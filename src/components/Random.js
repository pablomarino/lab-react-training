import './Random.css'
function Random({ min, max }) {
  return (
    <p className="randomcard">
      Random value between {min} and {max} = {
        Math.floor(Math.random() * (max - min + 1)) + min
      }
    </p>
  );
}

export default Random;