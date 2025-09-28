import { ReactElement } from "react";

export function SideBarItems({text,icon,onclick}:{text:string,icon:ReactElement,onclick:()=>void}){
    return <div onClick={onclick} className="flex pb-2  pt-2 items-center   cursor-pointer hover:bg-slate-200 rounded max-w-48 transition-all duration-300">


<div className="pr-3  text-gray-500  "  >{icon}</div>
<div  className="pr-2 text-gray-500 " >{text}</div>




    </div>
}