import { useState } from "react";
import "./Dice.css";
const Dice = function () {
  const [dice, setDice] = useState("0");
  const handleClick = () => {
    setDice("0");
    setTimeout(() => {
      setDice(Math.floor(Math.random() * 6) + 1);
    }, 1000);
  };
  return <img className="dicecard" src={`./dice${dice}.png`} alt={`${dice} dots dice`} onClick={handleClick}></img>;
};

export default Dice;
