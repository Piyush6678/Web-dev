import { useState } from "react";
import { Button } from "./button";

export function Users(){
    const [users,setUsers]=useState([{
        firstName:"Piyush",
        lastname:"Singh",
        _id:1
    }]);
    return <>
    <div>
        </div>
        <div>
            <input/>
            </div>
           <div>
            </div> </>
}

function User({user}){
    return <div>
        <div>
            <div>
                <div>

                </div>
            </div>
            <div>
                <div></div>

            </div>
        </div>
        <div>
            <Button/>
        </div>
    </div>
}