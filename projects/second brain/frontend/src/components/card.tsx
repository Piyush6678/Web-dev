import { useEffect, useRef } from "react";
import { InstagramIcon } from "../icons/InstgramIcon";
// import { Shareicon } from "../icons/share";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { DeleteIcon } from "../icons/deleteIcon";
// import { useContent, useContentDelete } from "../hooks/useContent";
// import { backend_url } from "../config";
// import axios from "axios";
import { deleteContent } from "./deleteContent";
interface CardProps{
    title:string;
    link :string;
type:"twitter"|"youtube"|"instagram";
}
// const typevariants: {CardProps.type}={
//     "twitter":,
//   "youtube": 
// }
// export async function deleteContent(title: string, link: string) {
//   console.log("delete function call")
//   return axios.delete(`${backend_url}/content/delete/`, {
//     params: { title, link },
//     headers: {
//       "authorization": localStorage.getItem("authorization"),
//     },
//   });
// }

export function Card({title,link,type}:CardProps) {
    const containerRef = useRef<HTMLDivElement>(null);
useEffect(() => {
  //@ts-ignore
  if (type === "instagram" && window.instgrm) {  
    //@ts-ignore
    window.instgrm.Embeds.process();
  }
}, [type, link]);

useEffect(() => {
  //@ts-ignore
  if (window.twttr && window.twttr.widgets) {
      //@ts-ignore
      window.twttr.widgets.load(containerRef.current);
    }
  }, [type,link]);

  return (
    <div>
      <div className=" p-4 bg-white rounded-md  border border-slate-200 max-w-172  " >
        <div className="flex justify-between">
          <div className="flex gap-3 items-center">
            <div className="text-gray-500">
              {/* <Shareicon size="md" /> */}
            </div>
            <div className="text-lg">{title}</div>
          </div>
          <div className="flex gap-3 items-center ">
            <div className="text-gray-500">
              <a href={link} target="_blank">   {type=="youtube"?<YoutubeIcon />:type=="twitter"?<TwitterIcon/>:<InstagramIcon/>   }</a>
            </div>
            <div className="text-gray-500 z-10 "  onClick={async ()=>await deleteContent(title,link)}  >
              <DeleteIcon  />
            </div>
          </div>
        </div>
       <div  className="pt-4   ">
{type=="twitter"&&<blockquote className="twitter-tweet">
         <a href={link.replace("x.com","twitter.com")}></a> 
   </blockquote>}
{type=="youtube" &&  <iframe className="w-full h-full " src={link.replace("watch?v=","embed/")} title="YouTube video player" frame-border="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> }
  {type === "instagram" && (
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={link}
              data-instgrm-version="14"
              style={{
                background: "#fff",
                border: "0",
                margin: "1px auto",
                padding: "0",
              // height:"auto",
                width: "full",
              }}
            ></blockquote>
          )}
      </div>
      </div>
      
    </div>
  );
}
