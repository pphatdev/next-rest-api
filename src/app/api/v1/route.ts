import { NextResponse } from "next/server";


export const GET = async (
    req: Request
) => {
    return NextResponse.json({ message: "Hello from Next.js!", req: req.url });
};


export const POST = async (
    req: Request
) => {}


export const PUT = async (
    req: Request
) => {}


export const DELETE = async (
    req: Request
) => {}

