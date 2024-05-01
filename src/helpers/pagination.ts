import { client } from "@/configs/db"
import { Options } from "./types"

export class Pagination
{

    query = async ( options: Options ) =>
    {
        const { table, selectColumns, conditions, page, limit, search, sort, showTotal } = options

        /**
         * Declare No value param
         */
        const noValue = ""


        /**
         * Select Columns from table {table}
         * @var {String} table
         * @param {Array} selectColumns
         * @return {String} `column1, column2`
         */
        const columns = Array.from(
            selectColumns
        ).map(
            column => column
        ).join(", ")


        /**
         * Search value from table {table}
         * @var {String} table
         * @param {String} search.value
         * @return {Boolean} true, false
         */
        const issetSearch = (
            search.value != null
            && search.value != "null"
            && search.value != ""
            && search.value != undefined
        )


        /**
         * Sorting Data
         * @param {String} sort.value
         * @return {Boolean} true, false
         */
        const issetSort = (
            sort.value != null
            && sort.value != "null"
            && sort.value != ""
            && sort.value != undefined
        )


        /**
         * Searching Colums from {table}
         * @param {String} search.column
         * @return {String} `column1, column2`
         */
        const searches = Array.from(
            search.column
        ).map(
            column => column
        ).join(` ${search.operator} `)



        /**
         * Sorting Data from {table}
         * @param {String} sort.column
         * @return {String} `column1, column2`
         */
        const sorts = Array.from(
            sort.column
        ).map(
            column => column
        ).join(", ")



        /**
         * Initalize conditions
         * @param {String} conditions.value
         * @return {Boolean} true, false
         */
        const issetcondition = (
            conditions.value != null
            && conditions.value != "null"
            && conditions.value != ""
            && conditions.value != undefined
        )


        /**
         * Show Total
         * @param {String} conditions.value
         * @return {Boolean} true, false
         */
        let total: any = undefined;
        if (showTotal) {
            const reponse = await client.query(`SELECT count(id) from ${table}`)
            total = reponse.rows[0].count || undefined
        }


        /**
         * String Query Returning
         * @example `SELECT column1, column2 FROM table WHERE column1 = '%value%' ORDER BY column1 ASC LIMIT 10 OFFSET 0`
         * @returns {String} query
         */
        const query = `SELECT ${ columns } FROM ${ table }
            ${ issetSearch
                ? `WHERE ${ issetcondition
                    ? `${conditions.value} and`
                    : ``} ${ searches } ilike '%${ search.value }%'`
                : issetcondition
                    ? `${conditions.operator} ${conditions.value}`
                    : noValue
            }
            ${ issetSort
                ? `order by ${ sorts } ${sort.value}`
                : noValue } ${ typeof limit != "string" ? `limit ${limit}` : noValue
            }
            ${ (page && typeof limit != "string")
                ? `offset ${(page - 1) * Number(limit)}`
                : noValue
            }`


        return (
            {
                sql: query.replaceAll(/(\n+|\s+|\t+)/g, " "),
                total: total,
            }
        )
    }
}