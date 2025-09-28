import { Button } from "../components/button";
import { Card } from "../components/card";
import { Plusicon } from "../icons/Plusicon";
import { Shareicon } from "../icons/share";
import { AddContentModal } from "../components/Addcontentmodal";
import { useState } from "react";
import { SideBar } from "../components/sidebar";
import { useContent } from "../hooks/useContent";
import { backend_url } from "../config";
import axios from "axios"
export  function DashBoard() {
  const [modalopen, setmodalopen] = useState(false);
 const [platform,setPlatform]=useState<string>("")
 const platformSwitch:any=(selectedPlatform:string)=>{

setPlatform(prev=> prev==selectedPlatform?"":selectedPlatform)

 }
  const contents= useContent(platform);
  return (
    <div>
      <div>
        <SideBar  onSelectPlatform={platformSwitch}  />
      </div>
      <div className="  p-4 min-h-screen bg-gray-100 ml-72 ">
        <AddContentModal
          open={modalopen}
          onClose={() => {
            setmodalopen(false);
          }}
        />
        <div className=" mb-4 flex justify-end gap-2 ">
          <Button
            starticon={<Shareicon size="md" />}
            variant="secondary"
            text="Share Brain"
            onClick={async () => {
             const response=await  axios.post(`${backend_url}/brain/share`,{
                share:true
              },{
                headers:{
                  "authorization":localStorage.getItem("authorization"),
                }
              })
              const shareurl=`http://localhost:5173/share/${response.data.hash}`
           alert(shareurl);
            }}
          ></Button>
          <Button
            starticon={<Plusicon size="lg" />}
            variant="primary"
            text="Add Content"
            onClick={() => {
              setmodalopen(true);
            }}
          ></Button>
        </div>
        <div className=" flex flex-wrap gap-4">
        {contents.map(({_id,type,title,link})=> <Card  key={_id}
            title={title}
            link={link}
          type={type}
         />
 
        )}
         
        </div>
      </div>
    </div>
  );
}


