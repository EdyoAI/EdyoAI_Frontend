import {  get_user_unattempted_test_paper } from "@/directus_api/testpapers";
import { difference, get, head } from "lodash";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request:NextRequest){
    const body =await  request.json()
    console.log(body)
    const count = get(body, 'count', null)

    if (count === null ) {
        return NextResponse.json({
            error: "Count is required"
        }, { status: 400 })
    }

    const unattemptedTestPaper = await get_user_unattempted_test_paper(count)

    if(unattemptedTestPaper != null){
        return NextResponse.json({
            data: unattemptedTestPaper
        })
    }else{
        console.log("ai will run and we send the response")
        return NextResponse.json({
            error: "No unattempted test papers found"
        }, { status: 400 })
    }

}