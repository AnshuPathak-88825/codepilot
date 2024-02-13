import { NextResponse,NextRequest } from "next/server";
export async function GET() {
    return NextResponse.json({ "hello": "hello" })
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        return NextResponse.json({ "received": body });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ "error": "Error occurred" }, { status: 500 });
    }
}