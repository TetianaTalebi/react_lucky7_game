import './App.css'
import {sum} from './utils';
import LuckyN from './LuckyN';

function App() {

  const lessThan4 = (dice) => {
    return sum(dice)<4;
  }

  const allSameValue = (dice) => {
    const checkAllSameValue = (curVal) => curVal === dice[0];
    return dice.every(checkAllSameValue);
  }
 
  return (
    <>
      <LuckyN />
      <LuckyN title="Roll less than 4" color="salmon" numDice={2} winCheck={lessThan4} />
      <LuckyN title="Roll the same number" color="lawngreen" numDice={2} winCheck={allSameValue} />
    </>
  )
}

export default App
