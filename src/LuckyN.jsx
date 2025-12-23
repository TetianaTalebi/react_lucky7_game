import { useState } from "react";
import './LuckyN.css';
import {getRolls, sum} from './utils';
import Dice from "./Dice";
import Button from "./Button";

const is7 = (dice) => {
        return sum(dice) === 7;
    }

// These are default values for "numDice" and "goal" props: numDice=2, goal=7
function LuckyN({title="Lucky 7", color, numDice=2, winCheck = is7}){

    const [dice, setDice] = useState(()=>getRolls(numDice));
    const isWinner = winCheck(dice);

    const roll = () => (setDice(getRolls(numDice)));

    return (
        <main className="LuckyN">
            <h1 style={ isWinner ? {color: "magenta"} : {} }>{title} {isWinner&&"You won!"}</h1>
            <Dice nums={dice} color={color} />
            <Button clickFunc={roll} label="Re-Roll Dice" />
        </main>
    );
}
export default LuckyN