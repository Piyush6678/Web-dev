import { useState } from "react";

function Counter(){
    
    const [x,setx] = useState(0);
    return (
        <>
        Count:{x}  is {(x%2)?"Odd":"Even"}
        <button onClick ={()=>setx(x+1)}>INC</button>
        <button onClick={()=>setx(x-1)} >Dec</button>
        
        
        </>



    )



}
export default Counter