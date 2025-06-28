import {  get_user_unattempted_test_paper } from "@/directus_api/testpapers";
import { generate_AI_TestPaper } from "@/qp_engine/ai_engine";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request:NextRequest){
    const body =await  request.json()
    console.log(body)
    const {count, topic,subject, exam} = body

    if (count === null ) {
        return NextResponse.json({
            error: "Count is required"
        }, { status: 400 })
    }

    const unattemptedTestPaper = await get_user_unattempted_test_paper(count)
    // console.log(await generate_AI_TestPaper())
    if(unattemptedTestPaper != null){
        return NextResponse.json({
            data: unattemptedTestPaper
        })
    }else{
        console.log("ai will run and we send the response")
        // const question_paper =await generate_AI_TestPaper(exam, topic,subject,count)
        // console.log('from route', question_paper)
        // return NextResponse.json({
        //     data:question_paper
        // },{status:200})
        const response = await generate_AI_TestPaper(exam, topic,subject,count)
        return NextResponse.json({
            data:response
        }, {status:200})
    }

}