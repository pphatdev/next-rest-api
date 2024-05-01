import { Paginations } from '@/lib/types';
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "./elements/pagination"
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ContentPagination: React.FC<{ pagination: Paginations, setPage: (page: number) => void, currentPage: number }> = ({
    pagination,
    setPage,
    currentPage
}) => {
    return (
        <Pagination className="scale-90 sm:scale-100 mt-5 select-none">
            <PaginationContent>
                <PaginationItem>
                    <PaginationLink
                        onClick={() => setPage(Number(currentPage) - 1)}
                        // href={pagination.prev?.url}
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
                            href={item.url}
                            isActive={item.active}
                            className="hover:drop-shadow hover:bg-white"
                        >
                            {item.label}
                        </PaginationLink>
                    </PaginationItem>
                ))}
                <PaginationItem>
                    <PaginationLink
                        onClick={() => setPage(Number(currentPage) + 1)}
                        // href={pagination.next?.url}
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