import { DATA_SEARCH, DATA_SORT, PAGE_LIMIT, PAGINATION } from "@/configs/env";
import { NextRequest } from "next/server";

export const requestAll = (
    request: NextRequest
) => {
    const params    = request.nextUrl.searchParams
    const limit     = Number(params.get('limit') || PAGE_LIMIT);
    const page      = Number(params.get('page') || PAGINATION);
    const search    = params.get('search') || DATA_SEARCH;
    const sort      = params.get('sort') || DATA_SORT;

    return {
        limit,
        page,
        search,
        sort
    }
}