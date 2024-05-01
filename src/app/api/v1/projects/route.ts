import { NextRequest } from "next/server";
import { client } from "@/configs/db";
import { requestAll } from "@/helpers/request";
import { Pagination } from "@/helpers/pagination";
import { Response } from "@/helpers/response";

const pagination    = new Pagination();
const response      = new Response()

export const GET = async (req: NextRequest ) => {
    try {
        const request = requestAll(req);
        const { page, limit, search, sort } = request
        const query = await pagination.query(
            {
                table: 'public.projects',
                selectColumns: ["id", "name", "description", "icon", "live", "source", "created_date"],
                conditions: {
                    operator: 'WHERE',
                    value: ''
                },
                page: page,
                limit: limit,
                search: {
                    column: [ 'name' ],
                    value: search,
                    operator: "or",
                    condition: "",
                    withWere: true
                },
                sort: {
                    column: [ "id" ],
                    value: sort
                },
                showTotal: true
            }
        )
        const reponse = await client.query(query.sql, [])
        return response.success(
            reponse.rows,
            query.total,
            request
        )
    } catch (error) {
        console.log(error)
    }
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

