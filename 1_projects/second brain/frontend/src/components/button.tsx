import { ReactElement } from "react";

export interface ButtonProps{
variant:"primary" |"secondary";
//size:"sm"|"md"|"lg";
text:string;
starticon?:ReactElement;
endicon?:ReactElement;
 onClick?:()=>void;
fullWidth?:boolean;
loading?:boolean;
}

// const sizestyle={
//     "sm":"py-1 px-2 text-md",
//     "md":"py-2 px-4 text-xl ",
//     "lg":"py-4 px-6 text-xl"
// }
const variantcolor={
    "primary":"bg-purple-600 text-white",
    "secondary":"bg-purple-300 text-purple-500"
}
const defaultstyles =" rounded-md flex gap-3 items-center py-2 px-4 text-xl "
export const Button=(props:ButtonProps)=>{

return <button onClick={props.onClick} className={`  ${props.fullWidth?" w-full flex items-center justify-center":""} ${props.loading?" opacity-45 disabled={true} ":" "} ${variantcolor[props.variant]}  ${defaultstyles } `} >  {props.starticon} {props.text}</button>
}


