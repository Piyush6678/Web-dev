import { BrainIcon } from "../icons/brainIcon";
import { InstagramIcon } from "../icons/InstgramIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SideBarItems } from "./sidebaritem";

export function SideBar(   {onSelectPlatform}:{
   
    onSelectPlatform: (platform:string)=>void
} ){
    return <div className="h-screen w-72 bg-white border-r-2 fixed left-0 top-0 pl-6 pt-5 " >
        <div className="flex text-2xl  ">
        <div className="text-purple-600" ><BrainIcon/></div> 
            <div className="pl-2" >Second-Brain</div>
        </div>
<div className="pt-5 ">
<SideBarItems onclick={()=>onSelectPlatform("youtube")} text="Youtube" icon={<YoutubeIcon/>} />
<SideBarItems text="Twitter" onclick={()=>onSelectPlatform("twitter")} icon={<TwitterIcon/>} />
<SideBarItems text="Instagram" onclick={()=>onSelectPlatform("instagram")} icon={<InstagramIcon/>} />
</div>
    </div>
}