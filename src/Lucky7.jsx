import { useState } from "react";
import { getRolls, sum } from "./utils";
import "./Lucky7.css";

export default function Lucky7() {
  const [dice, setDice] = useState(() => getRolls(2));

  const won = sum(dice) === 7;

  function roll() {
    setDice(getRolls(2));
  }

  return (
    <main className="Lucky7">
      <h3 style={won ? { color: "magenta" } : {}}>
        Lucky7 {won ? "You won!" : "You loose!"}
      </h3>

      <section className="Lucky7-dice">
        <div className="Lucky7-die">{dice[0]}</div>
        <div className="Lucky7-die">{dice[1]}</div>
      </section>
      <br />
      <button onClick={roll}>Roll again!</button>
    </main>
  );
}
