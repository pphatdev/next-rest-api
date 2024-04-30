import { NextRequest } from "next/server";
import { client } from "@/configs/db";
import { requestAll } from "@/helpers/request";
import { Pagination } from "@/helpers/pagination";
import { Response } from "@/helpers/response";
import { NextApiResponse } from "next";

const pagination    = new Pagination();
const response      = new Response()

export const GET = async (req: NextRequest, res: NextApiResponse ) =>
{
    try {
        const request = requestAll(req);
        const { page, limit, search, sort } = request

        const count = await client.query(`SELECT count(id) from public.users`)
        const total = count.rows[0].count || 0

        const query = pagination.query(
            {
                table: 'public.users',
                selectColumns: ["id", "name", "email", "created_at", "updated_at"],
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
                }
            }
        )
        const reponse = await client.query(query, [])
        return response.success(
            reponse.rows,
            total,
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

