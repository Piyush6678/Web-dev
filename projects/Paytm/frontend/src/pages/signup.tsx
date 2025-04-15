import { BottomWarning } from "../component/bottomwarning";
import { Button } from "../component/button";
import { Heading } from "../component/heading";
import { SubHeading } from "../component/subheading";
import { InputBox } from "../component/inputbox";

export  function Signup(){
    return <div className="bg-slate-300 h-screen flex justify-center" >
        <div className="flex flex-col justify-center">
            <div className=" rounded-lg bg-white w-80 text-center p-2 h-max  px-4 " >
                <Heading  label={"Sign up"} />
                <SubHeading label={"Enter you information to create an account"} />
                <InputBox  placeholder="john" label={"First name"}  />
                <InputBox placeholder="Doe" label={"last Name"} />
                <InputBox placeholder="abc@xyz.com" label={"Email"} />
                <InputBox placeholder="123456" label={"password"} />
                <div className="pt-4" >
                    <Button label={"Sign up"} />
                </div>
                <BottomWarning  label={"Already have an account ?"} buttontext={"Sign in"} to ={"/signin"}   />
            </div>
        </div>
    </div>
} 