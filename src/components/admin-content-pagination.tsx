import { Paginations } from '@/lib/types';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./elements/pagination"
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ContentPagination: React.FC<{ pagination: Paginations }> = ({
    pagination,
}) => {
    return (
        <Pagination className="scale-90 sm:scale-100 mt-5">
            <PaginationContent>
                <PaginationItem>
                    <PaginationLink
                        href={pagination.prev?.url}
                        className={
                            !pagination.prev?.status
                                ? `pointer-events-none`
                                : "hover:drop-shadow hover:bg-white"
                        }>
                        <ChevronLeft className="h-4 w-4" />
                    </PaginationLink>
                </PaginationItem>
                {pagination.items?.slice(0,5).map((item: any, index: number) => (
                    <PaginationItem key={index}>
                        <PaginationLink
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
                        href={pagination.next?.url}
                        className={
                            !pagination.next?.status
                                ? `pointer-events-none`
                                : "hover:drop-shadow hover:bg-white"
                        }>
                        <ChevronRight className="h-4 w-4" />
                    </PaginationLink>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export { ContentPagination }