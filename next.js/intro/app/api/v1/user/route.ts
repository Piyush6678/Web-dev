 import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const client= new PrismaClient()
export  async function POST(req:NextRequest){
    const body= await req.json();
        const user = await client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    });
    return NextResponse.json({username:body.username,apssword:body.password})

}
export async function GET() {
    const user = await client.user.findFirst({});
    return Response.json({ name: user?.username, email: user?.username })
}//