import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export default async function POST(req: NextRequest){
    const body = await req.json()

    const  resp = await axios.post(`${process.env.NEXT_PUBLIC_AI_API_URL}/start-session`,{
        "exam": "SSC",
        "topic": "ইতিহাস",
        "subject": "current_affairs",
        "num_qs": 50
    })

    return NextResponse.json({
        data: resp.data
    },{status:200})

}