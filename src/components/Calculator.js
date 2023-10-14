import {useState} from "react";
import './Calculator.css';
import "primeicons/primeicons.css";
function Calculator(){
   const[value,setvalue]=useState([]);
   const[bool,setbool]=useState(false);
   const handleclick=(event)=>{
    if((event.target.innerHTML==="+" || event.target.innerHTML==="-")){
        setvalue(value+event.target.innerHTML);
        setbool(false);
        
    }
    else if(bool===true){
        setvalue(event.target.innerHTML);
        setbool(false);
        }
    else{
        setvalue(value+event.target.innerHTML);
        }
   }
    const evaluate=()=>{
    setvalue(eval(value));
    setbool(true);
    
    }
    const handleclickm=()=>{
        setvalue(value+"*");
        setbool(false);
    }
    const handleclickd=()=>{
        setvalue(value+"/");
        setbool(false);
    }
    const handledelete=()=>{
        setvalue(value.toString().slice(0,-1));
        setbool(false);
    }

   return(
    <center>
    <div>
    <input value={value}></input>
    <div class="main">
       <div class="numbers">
       <div>
       <button class="num" onClick={handleclick}>7</button>
       <button class="num" onClick={handleclick}>8</button>
       <button class="num" onClick={handleclick}>9</button>
       </div>
       <div>
       <button class="num" onClick={handleclick}>4</button>
       <button class="num" onClick={handleclick}>5</button>
       <button class="num" onClick={handleclick}>6</button>
       </div>
       <div>
       <button class="num" onClick={handleclick}>1</button>
       <button class="num" onClick={handleclick}>2</button>
       <button class="num" onClick={handleclick}>3</button>
       </div>
       <div>
       <button class="num" onClick={handleclick}>0</button>
       <button class="num" onClick={handleclick}>.</button>
       <button class="num" onClick={evaluate}>=</button>
       </div>
       </div>
       <div class="operator">
       <button class="opr"onClick={handledelete}>
        <i className="pi pi-delete-left"></i></button><br/>
       <button class="opr" onClick={handleclickd}>÷</button><br/>
       <button class="opr" onClick={handleclickm}>x</button><br/>
       <button class="opr" onClick={handleclick}>-</button><br/>
       <button class="opr" onClick={handleclick}>+</button>
       </div>
    </div>
    </div>
    </center>)
}
export default Calculator;