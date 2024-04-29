import { useRouter } from "next/navigation";

export const Goto = ( path:string ): void => {
    const router = useRouter()
    router.push(path)
}



export const useUpdateUrl = (
    page?: string | number ,
    limit?: string | number ,
    search?: string | null,
    sort?: string
) => {

    let query = "page=1&limit=10&sort=asc&search=";

    if (window.location.search) {
        query = window.location.search.split('?')[1]
    }

    let urlObject: {
        page?: string | number,
        limit?: string | number,
        search?: string | null,
        sort?: string
    } = {};

    const queryParams = query.split('&');

    queryParams.map((param) => {
        const [key, value] = param.split("=");
        urlObject = {...urlObject, [key]: value }
    });

    Object.assign(urlObject, { page: page, limit: limit, search: search, sort: sort });

    const paramString = Object.entries(urlObject).flatMap(([key, value]) => (value ? [`${key}=${value}`] : [])).join("&");

    const newUrl = `${window.location.origin + window.location.pathname}?${paramString}`;
    return newUrl
};


export const useUpdateParamSearch = (
    page?: string | number,
    limit?: string | number,
    search?: string | null,
    sort?: string
) => {


    let query = "page=1&limit=10&sort=asc&search=";
    if (window.location.search) {
        query = window.location.search.split('?')[1]
    }


    let urlObject: {
        page?: string | number,
        limit?: string | number,
        search?: string | null,
        sort?: string
    } = {};

    const queryParams = query.split('&');

    queryParams.map((param) => {
        const [key, value] = param.split("=");
        urlObject = {...urlObject, [key]: value }
    });

    Object.assign(urlObject, { page: page, limit: limit, search: search, sort: sort });

    const paramString = Object.entries(urlObject).flatMap(([key, value]) => (value ? [`${key}=${value}`] : [])).join("&");

    return `?${paramString}`
};