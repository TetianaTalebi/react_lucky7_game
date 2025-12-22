import './App.css'
import Lucky7 from './Lucky7'
import Dice from './Dice'

function App() {
 
const nums = [1,3,5,6];
  return (
    <>
      <Dice nums = {nums} color="salmon" />
      {/* <Lucky7 /> */}
    </>
  )
}

export default App
