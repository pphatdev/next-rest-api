import { NextRequest, NextResponse } from 'next/server';

const allowedOrigins = ['*'];

export default async function middleware(req: NextRequest) {
    const response = NextResponse.next();

    const origin = req.headers.get("origin") || "";
    if (allowedOrigins.includes(origin)) {
        response.headers.set("Access-Control-Allow-Origin", origin);
    }

    return response;
}
