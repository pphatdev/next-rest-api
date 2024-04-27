import { DB, DBHost, DBName, DBPassword, DBPort, DBUser, Limit, Page, Search, SortBy, Version } from "@/helpers/types";


export const VERSION: Version = process.env.VERSION || "1.0.0";
export const APP_NAME: string = process.env.APP_NAME || "Restful API";
export const NODE_ENV: string = process.env.NODE_ENV || "development";


export const DB_HOST: DBHost = process.env.DB_HOST || "localhost";
export const DB_NAME: DBName = process.env.DB_NAME || "localhost";
export const DB_PORT: DBPort = Number(process.env.DB_PORT) || 5432;
export const DB_USER: DBUser = process.env.DB_USER || "postgres";
export const DB_PWD: DBPassword = process.env.DB_PWD || "123";

/**
 * Paginations
 */
export const PAGINATION: Page = 1;
export const PAGE_LIMIT: Limit = 10;
export const DATA_SEARCH: Search = null;
export const DATA_SORT: SortBy = "asc";


export const DBConfig: DB = {
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME,
    user: DB_USER,
    password: DB_PWD,
}