import prisma from "@/libs/prismaClient"
import { NextResponse } from 'next/server'

export async function POST(request) {
    

    let data = await prisma.users.findMany({
        orderBy: [
            {
                dateJoined: "desc"
            }
        ]
    })
    return NextResponse.json({ data })
    
}