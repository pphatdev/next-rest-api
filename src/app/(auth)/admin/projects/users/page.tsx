"use client"

import AdminLayout from '../../../../../components/admin-layout';
import AdminBreadcrumb from '@/components/admin-breadcrumb';
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/elements/table';
import { useEffect, useState } from 'react';
import { fetchData } from '@/lib/fetch';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/elements/pagination';
import { Paginations } from '@/lib/types';
import { classNames } from '@/lib/class-name';

const pages = [
    { name: 'Projects', href: '/admin/projects', current: false},
    { name: 'Contributors', href: null, current: false },
]

export default function Users(request: any)
{
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    const [pagination, setPagination] = useState<Paginations>({})

    useEffect(() => {
        const getData = async () => {
            const originURL = window.location.origin
            const url = `${originURL}/api/v1/users${ window.location.search ? window.location.search: '' }`
            const data = await fetchData(url);
            setData(data.result)
            setPagination(data.pagination.buttons)
            setIsLoading(false)

        };
        getData()
    }, []);

    return (
        <AdminLayout>
            <header className='flex items-center justify-between gap-3'>
                <AdminBreadcrumb pages={pages}/>
                {/* <AdminBreadcrumb pages={pages}/> */}
            </header>
            <div className='mt-9 rounded-lg ring-1 ring-black/10'>
                <Table className='bg-white rounded-lg'>
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
                            !isLoading
                            && Array.from(data).map((user: any) => (
                                <TableRow key={user.id}>
                                    <TableCell className="font-medium">U-{user.id}</TableCell>
                                    <TableCell className="font-medium">{user.name}</TableCell>
                                    <TableCell className='hidden sm:block'>{user.email}</TableCell>
                                    <TableCell>{user.created_at}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                    {
                        isLoading
                        && <TableFooter>
                            <TableRow>
                                <TableCell colSpan={4} className='text-center'>
                                    loading...
                                </TableCell>
                            </TableRow>
                        </TableFooter>
                    }
                </Table>

            </div>
            {
                !isLoading
                &&
                <Pagination className='mt-5'>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href={pagination.prev?.url} className={!pagination.prev?.status? `pointer-events-none`:'hover:drop-shadow hover:bg-white'}/>
                        </PaginationItem>
                        {pagination.items?.map((item: any, index: number) => (
                            <PaginationItem key={index}>
                                <PaginationLink href={item.url} className={ classNames(item.active ? `bg-white drop-shadow`:`hover:bg-white`, 'hover:drop-shadow hover:bg-white')}>{item.label}</PaginationLink>
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
