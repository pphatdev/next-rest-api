"use client"

import AdminLayout from '../../../../components/admin-layout';
import AdminBreadcrumb from '@/components/admin-breadcrumb';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/elements/table';
import { useEffect, useState } from 'react';
// import { fetchData } from '@/lib/fetch';
import { Paginations } from '@/lib/types';
import { useRouter } from 'next/navigation';
import { useUpdateParamSearch } from '@/lib/goto-link';
import { PaginationLoading } from '@/components/elements/pagination-loading';
import { DateFormat } from '@/lib/date';
import { DOMAIN } from '@/configs/env';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { CardLoading } from '@/components/loading';
import { LeftContentHeader } from '@/components/admin-content-header';
import { ContentPagination } from '@/components/admin-content-pagination';
import axios from "axios"

const pages = [
    { name: 'Projects', href: '/admin/projects', current: false},
    { name: 'Contributors', href: null, current: false },
]

export default function Users(request: any)
{
    const currentPage = request.searchParams.page || 1
    const currentLimit = request.searchParams.limit || 10
    const currentSearch = request.searchParams.search || ""
    const currentSort = request.searchParams.sort || "asc"

    const router = useRouter();
    const [page, setPage] = useState<number|string>(currentPage)
    const [limit, setLimit] = useState<number|string>(currentLimit)
    const [search, setSearch] = useState<string>(currentSearch)
    const [sort, setSort] = useState<string>(currentSort)

    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [data, setData] = useState<Array<any>>([])
    const [pagination, setPagination] = useState<Paginations>({})

    const [paramSearch, setParamSearch] = useState<string>("");
    const [currentAPI, setCurrentAPI] = useState(`${DOMAIN}/api/v1/users?page=${page}&limit=${limit}&search=${search}&sort=${sort}`);
    const [view, setView] = useState("table")

    useEffect(() => {
        const originURL = window.location.origin
        const apiURL    = originURL + "/api/v1/users"
        const currentURL = originURL + window.location.pathname

        const updatedParams = useUpdateParamSearch( page, limit, search, sort );
        setParamSearch(updatedParams)

        const getData = async (paramSearch?: string) => {
            const url   = `${paramSearch ? apiURL + paramSearch : currentAPI}`;
            const res   = await axios.get(url)
            const data  = res?.data || {}
            setData(data?.result || []);
            setPagination(data?.pagination?.buttons || {});
            setIsLoading(false);
        };

        setCurrentAPI(apiURL + updatedParams)
        getData(paramSearch)

        router.push(currentURL + updatedParams)
    }, [ page, limit, search, sort]);


    const searchQuery = (event: any) => {
        setSearch(event.target.value)
    }

    const setGrid = (event: any) => {
        setView('grid')
    }

    const setList = (event: any) => {
        setView('table')
    }

    return (
        <AdminLayout>
            <header className='sm:flex items-end justify-between gap-3'>
                <AdminBreadcrumb pages={pages}/>
                <LeftContentHeader
                    handleSearch={searchQuery}
                    search={search}
                    setGrid={setGrid}
                    setList={setList}
                    view={view}>
                </LeftContentHeader>
            </header>

            <div className='mt-9 rounded-lg ring-1 ring-black/10'>
                {
                    view == "table"
                    ? <Table className='bg-white rounded-lg'>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[150px]">ID</TableHead>
                                <TableHead className='text-start'>Names</TableHead>
                                <TableHead className='text-start'>Email</TableHead>
                                <TableHead className='hidden sm:flex items-center justify-start'>Join Date</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                        {
                            isLoading
                            ? [1,2,3,4,5,6,7,8,9,10].map((_: any, key: number) => (
                                <TableRow key={key}>
                                    <TableCell className="font-medium"><div className='h-3 my-1 w-full rounded-full bg-slate-100'></div></TableCell>
                                    <TableCell className="font-medium"><div className='h-3 my-1 w-full rounded-full bg-slate-100'></div></TableCell>
                                    <TableCell><div className='h-3 my-1 w-full rounded-full bg-slate-100'></div></TableCell>
                                    <TableCell><div className='h-3 my-1 w-full rounded-full bg-slate-100'></div></TableCell>
                                </TableRow>
                            ))
                            : Array.from(data).map((user: any) => (
                                <TableRow key={user.id}>
                                    <TableCell className="font-medium">UI-{user.id}</TableCell>
                                    <TableCell className="font-medium truncate">{user.name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell><DateFormat dateString={user.created_at}></DateFormat></TableCell>
                                </TableRow>
                            ))
                        }
                        </TableBody>
                    </Table>
                    : <div>
                        { isLoading
                            ? <CardLoading/>
                            : <div className='grid grid-cols-1 odd:divide-y sm:grid-cols-2 md:grid-cols-2 lg:sm:grid-cols-4'>
                                { Array.from(data).map((user: any, key: number) => (
                                    <div key={key} className="flex items-center space-x-4 p-3">
                                        <Avatar className='flex-shrink-0'>
                                            <AvatarImage src="https://github.com/shadcn.png" width={50} height={50} className='rounded-full' alt="@shadcn" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <div className="space-y-2 w-full">
                                            <h1 className='leading-tight font-medium'>{user.name}</h1>
                                            <p className='text-sm text-black/70'>{user.email}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        }
                    </div>
                }

            </div>
            {
                isLoading
                ? <PaginationLoading/>
                : <ContentPagination
                    setPage={setPage}
                    currentPage={currentPage}
                    pagination={pagination}/>
            }
        </AdminLayout>
    );
}
