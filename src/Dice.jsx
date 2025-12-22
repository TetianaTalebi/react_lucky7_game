import './Dice.css'
import Die from "./Die";

// nums is an array of numbers
// default color is defined in "Die" component
function Dice({nums, color}){

    return (
        <section className="Dice">

            {nums.map((el, index)=>(
                <Die key={index} val={el} color={color} />
            ))}

        </section>
    );

}
export default Dice