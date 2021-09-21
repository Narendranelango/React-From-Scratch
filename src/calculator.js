import userEvent from "@testing-library/user-event";
import { useState, useEffect, useRef } from "react";

const Calculator = () => {
    const [Valueone, setValueone] = useState();
    const [Valuetwo, setValuetwo] = useState();
    const [Operator,setOperator] = useState();
    const [Result, setResult]=useState();

    const handleChange1 = (event) => {
        console.log(event.target.value);
        setValueone(event.target.value);
      }; 

      const handleChange2 = (event) => {
        console.log(event.target.value);
        setValuetwo(event.target.value);
      }; 

      const handleChange3 = (event) => {
        console.log(event.target.value);
        setOperator(event.target.value);
      }; 
  
    const Val=()=>{
        if(Operator === '+'){
            let res=parseInt(Valueone)+parseInt(Valuetwo)
            setResult(res)
            console.log("The result is : ",res)
            
        }
        else if(Operator === '-'){
            let res=parseInt(Valueone)-parseInt(Valuetwo)
            setResult(res)
        }
        else if(Operator === '*'){
            let res=parseInt(Valueone)*parseInt(Valuetwo)
            setResult(res)
        }
        else if(Operator === '/'){
            let res=parseInt(Valueone)/parseInt(Valuetwo)
            setResult(res)
        }
    }

  return( 
    <div className="content">
  <h1>Calculator</h1><br/><br/><br/><br/>
  <form>
  <label>
    Value 1:
    <input
          type="text"
          name="operation"
           onChange={handleChange1}
           value={Valueone}
        />  
  </label> 

  <label>
    Operation:
    <input
          type="text"
          name="operation"
           onChange={handleChange3}
          value={Operator}
        />
  </label>

  <label>
    Value 2:
    <input
          type="text"
          name="operation"
          onChange={handleChange2}
           value={Valuetwo}
        />
    
  </label><br/><br/><br/><br/>
  <label>
    Result
    <input
          type="text"
          name="operation"   
           value={Result}
        />
    
  </label>

  <button onClick={Val}>Result</button>
</form>
<h1>{Result}</h1>

</div>
  )}
export default Calculator;
