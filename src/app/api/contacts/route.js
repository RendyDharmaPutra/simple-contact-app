import { dbconnect } from "@/utils/db"
import { NextResponse } from "next/server"


export async function GET(Request) {
    const {db, client} = await dbconnect()
    const contacts = await db.collection('members').find().sort({nama: 1}).toArray()
    client.close()

    // return new Response(contacts)
    return  NextResponse.json(contacts)
    // return new Response('Hello')
}