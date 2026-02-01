import { NextResponse } from "next/server"

export function GET(){
    return NextResponse.json({
        user:"piyush",
        email:"piyush@gmail.com"
    })
}