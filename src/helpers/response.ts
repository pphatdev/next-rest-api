import { PAGE_LIMIT, VERSION } from "@/configs/env"
import { NextResponse } from "next/server"

export class Response
{
    init = (params: object) => {
        return NextResponse.json(params)
    }

    success = (data: object, total?: number , request?: any, ...options: any[]) =>
    {
        const { page, limit, search, sort } = request

        /**
         *  Merge search params
        */
        const params = `&limit=${limit}&sort=${sort}${search ? `&search=${search}` : ''}`

        /**
         * Calulate total pages
        */
        const totalPages    = Math.ceil(Number(total) / Number(limit || PAGE_LIMIT) )

        return this.init({
            status: 200,
            success: true,
            version: VERSION,
            total: total,
            result: data,
            pagination: {
                totalPages: totalPages,
                currentPage: page,
                query: {
                    page:page,
                    limit:limit,
                    search:search,
                    sort:sort,
                },
                buttons: {
                    /**
                     *  Check Previous button
                    */
                    prev: {
                        status: Number(page) > 1 ? true : false,
                        url: Number(page) > 1 ? `?page=${page - 1}${params}` : `?page=${page}${params}`,
                    },

                    /**
                     *  Generate page list items
                    */
                    items: Array.from({ length: 5 }, (_, i) => {
                        const offset = Math.min(i, totalPages - page);
                        const pageNumber = page + offset;
                        // const pageNumber = Math.max(1, Math.min(Number(page) - 2 + i, totalPages));
                        return {
                            label: String(pageNumber),
                            url: `?page=${pageNumber}${params}`,
                            active: page == pageNumber
                        };
                    }),
                    /**
                     *  Check Next button
                    */
                    next: {
                        status: Number(page) < totalPages  ? true : false,
                        url: Number(page) < totalPages ? `?page=${page + 1}${params}` : `?page=${page}${params}`
                    }
                }
            },
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