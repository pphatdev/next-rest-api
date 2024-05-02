"use client"

import AdminLayout from '../../../../components/admin-layout';
import AdminBreadcrumb from '@/components/admin-breadcrumb';
import { useEffect, useMemo, useState } from 'react';
import { ClientSearchParams, Paginations } from '@/lib/client-types';
import { LeftContentHeader } from '@/components/admin-content-header';
import { getUsers } from './data-controller';
import { ViewPagination } from '../../../../lib/pagination';
import { ViewContribute } from './view-controller';
import { useRouter } from 'next/navigation';
import { useUpdateParamSearch } from '@/lib/goto-link';
import { defaultSearchParams } from '../../../../lib/default';

const pages = [
    { name: 'Projects', href: '/admin/projects', current: false},
    { name: 'Contributors', href: null, current: false },
]

export default function Users(request: ClientSearchParams)
{
    const requestParams = request.searchParams
    const searchParams  = { ...requestParams, ...defaultSearchParams}

    const router = useRouter();
    const [currentData, setCurrentData] = useState<Array<any>>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [currentLimit, setCurrentLimit] = useState(10)
    const [currentSearch, setCurrentSearch] = useState('')
    const [currentSort, setCurrentSort] = useState('asc')
    const [pagination, setPagination] = useState<Paginations>({})
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [currentView, setCurrentView ] = useState('table')
    const [currentSearchParams, setCurrentSearchParams] = useState(searchParams)

    const currentDataPromise = useMemo(async () => {
        return await getUsers(currentSearchParams);
    }, [
        currentPage,
        currentLimit,
        currentSearch,
        currentSort,
        currentSearchParams
    ]);

    currentDataPromise.then(currentData => {
        setCurrentData(currentData.result)
        setPagination(currentData.pagination.buttons)
        router.push(useUpdateParamSearch( currentSearchParams ))
        setIsLoading(false)
    });

    const searchData = (e: any) => {
        setCurrentSearch(e.target.value)
        currentSearchParams.search = e.target.value

        // When started to search page automatic = 1
        e.target.value !== ''
            ? currentSearchParams.page = 1
            : currentSearchParams.page = currentPage

        currentSearchParams.limit = currentLimit
        setCurrentSearchParams(currentSearchParams)
    }

    const setPage = (page: number) => {
        setCurrentPage(page)
        currentSearchParams.page = page
        setCurrentSearchParams(currentSearchParams)
    }

    return (
        <AdminLayout>
            <header className='sm:flex items-end justify-between gap-3'>
                <AdminBreadcrumb pages={pages}/>
                <LeftContentHeader
                    handleSearch={searchData}
                    search={currentSearch}
                    setView={setCurrentView}
                    view={currentView}>
                </LeftContentHeader>
            </header>

            <ViewContribute
                view={currentView}
                data={currentData}
                isLoading={isLoading}>
            </ViewContribute>

            <ViewPagination
                pagination={pagination}
                setPage={setPage}
                currentPage={currentPage}
                isLoading={isLoading}>
            </ViewPagination>
        </AdminLayout>
    );
}
