
export type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
}

export type User = {
    id: string
    name: string
    email: string
    created_at: Date
}

export type AdminContainer = {
    children?: React.ReactNode
    className?: string
    style?: React.CSSProperties
}

export type ButtonType = AdminContainer & {
    props?: any
    href?: string
}

export type ListChildren = Array<{
    id: number | string
    name?: string
    href?: string
    initial?: string
    icon?: any
    new?: number | 0
    current?: boolean
}>

export type ModuleList = Array<
    Omit<ListChildren[0], "new" | "icon" | "initial">
    & { children: ListChildren }
>;

export type Breadcrumb = Array<{
    name: string;
    href?: string | undefined | null;
    current?: boolean
}>


export type Paginations = {
    prev?: {
        status?: boolean
        url?: string
    },
    items?: Array<{
        label?: string,
        url?: string,
        active?: boolean,
    }>,
    next?: {
        status?: boolean
        url?: string
    }
}


export type PaginationParams = {
    page?: number,
    limit?: number,
    search?: string,
    sort?: string | 'asc' | 'desc',
}


// Expected
// export type ModuleList = Array<{
//     id: number | string
//     name?: string
//     href?: string
//     current?: boolean
//     children: ListChildren
// }>;