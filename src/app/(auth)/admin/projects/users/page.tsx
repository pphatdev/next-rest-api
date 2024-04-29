"use client"

import AdminLayout from '../../../../../components/admin-layout';
import AdminBreadcrumb from '@/components/admin-breadcrumb';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/elements/table';
import { useEffect, useState } from 'react';
import { fetchData } from '@/lib/fetch';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/elements/pagination';
import { Paginations } from '@/lib/types';
import { useRouter } from 'next/navigation';
import { useUpdateParamSearch } from '@/lib/goto-link';
import { PaginationLoading } from '@/components/elements/pagination-loading';
import { DateFormat } from '@/lib/date';
import { SearchItems } from '@/components/elements/search-items';
import { Button } from '@/components/elements/button';
import { classNames } from '@/lib/class-name';
import { DOMAIN } from '@/configs/env';
import { Skeleton } from '@/components/elements/skeleton';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

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
    const [page, setPage] = useState(currentPage)
    const [limit, setLimit] = useState(currentLimit)
    const [search, setSearch] = useState(currentSearch)
    const [sort, setSort] = useState(currentSort)

    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    const [pagination, setPagination] = useState<Paginations>({})

    const [paramSearch, setParamSearch] = useState("");

    const [currentAPI, setCurrentAPI] = useState(`${DOMAIN}/api/v1/users?page=${page}&limit=${limit}&search=${search}&sort=${sort}`);

    const [view, setView] = useState("table")


    useEffect(() => {
        const originURL = window.location.origin
        const api = originURL + "/api/v1/users"
        const currentURL = originURL + window.location.pathname

        const updatedParams = useUpdateParamSearch( page, limit, search, sort );
        setParamSearch(updatedParams)

        const getData = async (paramSearch?: string) => {
            const url = `${paramSearch? api + paramSearch :currentAPI }`
            const data = await fetchData(url);
            setData(data.result || [])
            setPagination(data.pagination.buttons || {})
            setIsLoading(false)
        };
        getData(paramSearch)
        setCurrentAPI(api + updatedParams)

        router.push(currentURL + updatedParams)
    }, [ page, limit, search, sort ]);

    const searchQuery = (e:any) => {
        setSearch(e.target.value)
    }

    const viewHandle = () => {

    }

    return (
        <AdminLayout>
            <header className='flex items-end justify-between gap-3'>
                <AdminBreadcrumb pages={pages}/>
                <div className='flex items-center gap-3'>
                    <SearchItems
                        name='search'
                        type='text'
                        value={search}
                        className='pl-8'
                        placeholder='Search items...'
                        onChange={searchQuery}>
                    </SearchItems>


                    <Button size={'icon'} variant={'outline'}>
                        <svg className='h-6 w-6' viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 18.5H14V16.5H10V18.5ZM3 6.5V8.5H21V6.5H3ZM6 13.5H18V11.5H6V13.5Z" fill="#C7CED9"/>
                        </svg>
                    </Button>

                    <div className='flex items-center'>
                        <Button size={'icon'} variant={'outline'} className='rounded-r-none' onClick={()=>{setView('grid'), setLimit(10)}}>
                            <svg className={classNames( view == 'grid' ? 'text-primary' : 'text-slate-300', 'h-6 w-6')} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 3.5V11.5H11V3.5H3ZM9 9.5H5V5.5H9V9.5ZM3 13.5V21.5H11V13.5H3ZM9 19.5H5V15.5H9V19.5ZM13 3.5V11.5H21V3.5H13ZM19 9.5H15V5.5H19V9.5ZM13 13.5V21.5H21V13.5H13ZM19 19.5H15V15.5H19V19.5Z" fill="currentColor"/>
                            </svg>
                        </Button>

                        <Button size={'icon'} variant={'outline'} className='rounded-l-none border-l-0' onClick={()=>{setView('table'), setLimit(32)}}>
                            <svg className={classNames( view == 'table' ? 'text-primary' : 'text-slate-300', 'h-6 w-6')} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 18.5H21V16.5H3V18.5ZM3 13.5H21V11.5H3V13.5ZM3 6.5V8.5H21V6.5H3Z"  fill="currentColor"/>
                            </svg>
                        </Button>
                    </div>

                </div>
            </header>
            <div className='mt-9 rounded-lg ring-1 ring-black/10'>
                {
                    view == "table"
                    ?<Table className='bg-white rounded-lg'>
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
                                ? [1,2,3,4,5,6,7,8,9,10].map((user: any, key: number) => (
                                    <TableRow key={key}>
                                        <TableCell className="font-medium"><div className='h-3 my-1 w-full rounded-full bg-slate-100'></div></TableCell>
                                        <TableCell className="font-medium"><div className='h-3 my-1 w-full rounded-full bg-slate-100'></div></TableCell>
                                        <TableCell className='hidden sm:block'><div className='h-3 my-1 w-full rounded-full bg-slate-100'></div></TableCell>
                                        <TableCell><div className='h-3 my-1 w-full rounded-full bg-slate-100'></div></TableCell>
                                    </TableRow>
                                ))
                                : Array.from(data).map((user: any) => (
                                    <TableRow key={user.id}>
                                        <TableCell className="font-medium">UI-{user.id}</TableCell>
                                        <TableCell className="font-medium truncate">{user.name}</TableCell>
                                        <TableCell className='hidden sm:block'>{user.email}</TableCell>
                                        <TableCell><DateFormat dateString={user.created_at}></DateFormat></TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                    : <div>
                        {
                            isLoading
                            ? <div className='px-4 py-3 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:sm:grid-cols-4'>
                                <div className="flex items-center space-x-4">
                                    <Skeleton className="h-12 w-12 flex-shrink-0 rounded-full" />
                                    <div className="space-y-2 w-full">
                                        <Skeleton className="h-4 w-full md:w-[250px]" />
                                        <Skeleton className="h-4 w-full md:w-[200px]" />
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <Skeleton className="h-12 w-12 flex-shrink-0 rounded-full" />
                                    <div className="space-y-2 w-full">
                                        <Skeleton className="h-4 w-full md:w-[250px]" />
                                        <Skeleton className="h-4 w-full md:w-[200px]" />
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <Skeleton className="h-12 w-12 flex-shrink-0 rounded-full" />
                                    <div className="space-y-2 w-full">
                                        <Skeleton className="h-4 w-full md:w-[250px]" />
                                        <Skeleton className="h-4 w-full md:w-[200px]" />
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <Skeleton className="h-12 w-12 flex-shrink-0 rounded-full" />
                                    <div className="space-y-2 w-full">
                                        <Skeleton className="h-4 w-full md:w-[250px]" />
                                        <Skeleton className="h-4 w-full md:w-[200px]" />
                                    </div>
                                </div>
                            </div>
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
                                    ))
                                }
                            </div>
                        }
                    </div>
                }


            </div>
            {
                isLoading
                ? <PaginationLoading/>
                : <Pagination className='mt-5'>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href={pagination.prev?.url} className={!pagination.prev?.status? `pointer-events-none`:'hover:drop-shadow hover:bg-white'}/>
                        </PaginationItem>
                        {pagination.items?.map((item: any, index: number) => (
                            <PaginationItem key={index}>
                                <PaginationLink href={item.url} isActive={item.active} className="hover:drop-shadow hover:bg-white">{item.label}</PaginationLink>
                            </PaginationItem>
                        ))}
                        <PaginationItem>
                            <PaginationNext href={pagination.next?.url} className={!pagination.next?.status? `pointer-events-none`:'hover:drop-shadow hover:bg-white'}/>
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            }
        </AdminLayout>
    );
}
