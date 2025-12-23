import { useState } from "react";
import './LuckyN.css';
import {getRolls, sum} from './utils';
import Dice from "./Dice";

const is7 = (dice) => {
        return sum(dice) === 7;
    }

// These are default values for "numDice" and "goal" props: numDice=2, goal=7
function LuckyN({title="Lucky 7", color, numDice=2, winCheck = is7}){

    const [dice, setDice] = useState(()=>getRolls(numDice));
    const isWinner = winCheck(dice);

    function roll(){
        setDice(getRolls(numDice));
    }

    return (
        <main className="LuckyN">
            <h1 style={ isWinner ? {color: "magenta"} : {} }>{title} {isWinner&&"You won!"}</h1>
            <Dice nums={dice} color={color} />
            <button onClick={roll}>Re-Roll Dice</button>
        </main>
    );
}
export default LuckyN