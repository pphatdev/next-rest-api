import { Paginations } from '@/lib/types';
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "./elements/pagination"
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ContentPagination: React.FC<{
    pagination: Paginations,
    setPage: (page: number) => void,
    currentPage: number
}> = ({
    pagination,
    setPage,
    currentPage
}) => {

    const prevClick = () => {
        pagination.prev?.status === true
            ? setPage(Number(currentPage) - 1)
            : setPage(1)
    }

    const nextClick = () => {
        pagination.next?.status === true
            ? setPage(Number(currentPage) + 1)
            : {}
    }

    return (
        <Pagination className="scale-90 sm:scale-100 mt-5 select-none">
            <PaginationContent>
                <PaginationItem>
                    <PaginationLink
                        onClick={prevClick}
                        className={
                            !pagination.prev?.status
                                ? `pointer-events-none`
                                : "hover:drop-shadow hover:bg-white cursor-pointer"
                        }>
                        <ChevronLeft className="h-4 w-4" />
                    </PaginationLink>
                </PaginationItem>
                {pagination.items?.map((item: any, index: number) => (
                    <PaginationItem key={index}>
                        <PaginationLink
                            onClick={() => setPage(Number(item.label))}
                            // href={item.url}
                            isActive={item.active}
                            className="hover:drop-shadow hover:bg-white cursor-pointer"
                        >
                            {item.label}
                        </PaginationLink>
                    </PaginationItem>
                ))}
                <PaginationItem>
                    <PaginationLink
                        onClick={nextClick}
                        className={
                            !pagination.next?.status
                                ? `pointer-events-none`
                                : "hover:drop-shadow hover:bg-white cursor-pointer"
                        }>
                        <ChevronRight className="h-4 w-4" />
                    </PaginationLink>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export { ContentPagination }