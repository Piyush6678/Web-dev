import { ReactNode } from "react";


export function IconButton(
{icon,activated,onClick}:{
    icon:ReactNode,
    activated:boolean
    onClick:()=>void
}
){
    return <div  className={`rounded-full pointer border p-2 ${activated?"text-red":"text-white"}  bg-black hover:bg-gray `} onClick={onClick} >
{icon}

    </div>

}