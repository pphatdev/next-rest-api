import { PAGE_LIMIT, VERSION } from "@/configs/env"
import { NextResponse } from "next/server"

interface PaginationButton {
    label: string;
    url: string;
    active: boolean;
}

interface Pagination {
    totalPages: number;
    currentPage: number;
}

export class Response
{
    init = (params: object) => {
        return NextResponse.json(params)
    }

    success = (data: object, total?: number , request?: any) =>
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
                    items: this.filterPaginationButtons({totalPages: totalPages, currentPage: page}),
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

    filterPaginationButtons = (pagination: Pagination): PaginationButton[] => {
        const buttons: PaginationButton[] = [];
        const range = 1; // number of buttons to show before and after the current page

        if (pagination.totalPages <= range * 2 + 1) {
            // if total pages is less than or equal to 7, show all buttons
            for (let i = 1; i <= pagination.totalPages; i++) {
                buttons.push({
                    label: `${i}`,
                    url: `?page=${i}&limit=10&sort=asc`,
                    active: i === pagination.currentPage,
                });
            }
        } else {
            // if total pages is greater than 7, show only a subset of buttons
            const start = Math.max(1, pagination.currentPage - range);
            const end = Math.min(pagination.totalPages, pagination.currentPage + range);

            if (start > 2) {
                buttons.push({
                    label: `1`,
                    url: `?page=1&limit=10&sort=asc`,
                    active: false,
                });
                if (start > 3) {
                    buttons.push({
                        label: `...`,
                        url: `#`,
                        active: false,
                    });
                }
            }

            for (let i = start; i <= end; i++) {
                buttons.push({
                    label: `${i}`,
                    url: `?page=${i}&limit=10&sort=asc`,
                    active: i === pagination.currentPage,
                });
            }

            if (end < pagination.totalPages - 1) {
                if (end < pagination.totalPages - 2) {
                    buttons.push({
                        label: `...`,
                        url: `#`,
                        active: false,
                    });
                }
                buttons.push({
                    label: `${pagination.totalPages}`,
                    url: `?page=${pagination.totalPages}&limit=10&sort=asc`,
                    active: false,
                });
            }
        }
        return buttons;
    }
}