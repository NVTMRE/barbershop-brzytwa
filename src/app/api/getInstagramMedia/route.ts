import {getIGMedia} from "@/app/actions";
import {NextResponse} from "next/server";

export const revalidate = 3600

export async function GET() {
    const data = await getIGMedia()

    return NextResponse.json(data)
}