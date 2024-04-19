export type DBPort = number;

export type DBHost = string;

export type DBName = string;

export type DBUser = string;

export type DBPassword = string;

export type Version = string | number;

export type Env = string;

export type Search = string | null;

export type Page = number | null | undefined;

export type Limit = number | string | "*" | "all";

export type SortBy = string | "asc" | "desc" | undefined | null;

export type Columns = Array<any>;

export type Operator = string | "or" | "and" | null;

export type Conditions = {
    operator: Operator,
    value: String | null
}

export type Searches = {
    column: Columns;
    operator: Operator;
    value: number | string | null;
    condition: string | "or" | "and";
    withWere: boolean | true;
};

export type Sort = {
    column: Columns;
    value: SortBy;
};

export type DB = {
    host: DBHost;
    port: DBPort;
    database: DBName;
    user: DBUser;
    password: DBPassword;
}

export type Options = {
    table: string,
    selectColumns: Array<any>,
    conditions: Conditions,
    page: Page,
    limit: Limit,
    search: Searches,
    sort: Sort
}


export type GetList = {
    page: Page,
    limit: number | string | null,
    search: string | "" | null,
    sort: SortBy,
}