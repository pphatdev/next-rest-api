import { ContentPagination } from "@/components/admin-content-pagination"
import { PaginationLoading } from "@/components/elements/pagination-loading"
import { Paginations } from "@/lib/client-types"

export const ViewPagination: React.FC<{
    isLoading?: boolean,
    pagination: Paginations,
    setPage: (page: number) => void,
    currentPage: number
}> = ({
    isLoading,
    pagination,
    setPage,
    currentPage
}) => {

    if (isLoading) {
        return <PaginationLoading/>
    }

    return (<ContentPagination setPage={setPage} currentPage={currentPage} pagination={pagination}/> )
}