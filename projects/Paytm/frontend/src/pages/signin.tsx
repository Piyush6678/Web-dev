import { BottomWarning } from "../component/bottomwarning";
import { Button } from "../component/button";
import { Heading } from "../component/heading";
import { SubHeading } from "../component/subheading";
import { InputBox } from "../component/inputbox";

export  function Signin(){
    return <div className="bg-slate-300 h-screen flex justify-center" >
        <div className="flex flex-col justify-center">
            <div className=" rounded-lg bg-white w-80 text-center p-2 h-max  px-4 " >
                <Heading  label={"Sign in"} />
                <SubHeading label={"Enter you credentials to create your account"} />
                <InputBox  placeholder="john" label={"First name"}  />
                <InputBox placeholder="Doe" label={"last Name"} />
                <InputBox placeholder="abc@xyz.com" label={"Email"} />
                <InputBox placeholder="123456" label={"password"} />
                <div className="pt-4" >
                    <Button label={"Sign up"} />
                </div>
                <BottomWarning  label={"Don't have an account ?"} buttontext={"Sign up"} to ={"/signup"}   />
            </div>
        </div>
    </div>
} 