import { VERSION } from "@/configs/env"
import { NextResponse } from "next/server"

export class Response
{
    init = (params: object) => {
        return NextResponse.json(params)
    }

    success = (data: object, total: Number | null , ...options: any[]) => {
        return this.init({
            status: 200,
            success: true,
            version: VERSION,
            total: total,
            result: data,
            ...options
        })
    }

    notFound = (data: object, ...options: any[]) => {
        return this.init({
            status: 404,
            success: true,
            version: VERSION,
            result: data,
            ...options
        })
    }

    insetSuccess = (...options: any[]) => {
        return this.init({
            status: 200,
            result: options
        })
    }

    insetFailed = (...options: any[]) => {
        return this.init({
            status: 400,
            result: options
        })
    }

    serverError = (message: string, ...options: any[]) => {
        return this.init({
            status: 500,
            success: false,
            version: VERSION,
            result: message,
            ...options
        })
    }

    authSuccess = (data: object, ...options: any[]) => {
        return this.init({
            status: 200,
            success: true,
            version: VERSION,
            result: data,
            ...options
        })
    }

    authClient = (message: string, ...options: any[]) => {
        return this.init({
            status: 400,
            success: false,
            version: VERSION,
            result: message,
            ...options
        })
    }

    unAuth = (message: string, ...options: any[]) => {
        return this.init({
            status: 401,
            success: false,
            version: VERSION,
            result: message,
            ...options
        })
    }

    invalidToken = (message: string, ...options: any[]) => {
        return this.init({
            status: 403,
            success: false,
            version: VERSION,
            result: message,
            ...options
        })
    }
}