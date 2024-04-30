import { Paginations } from '@/lib/types';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./elements/pagination"

const ContentPagination: React.FC<{ pagination: Paginations }> = ({
    pagination,
}) => {
    return (
        <Pagination className="mt-5">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        href={pagination.prev?.url}
                        className={
                            !pagination.prev?.status
                                ? `pointer-events-none`
                                : "hover:drop-shadow hover:bg-white"
                        }
                    />
                </PaginationItem>
                {pagination.items?.slice(0,3).map((item: any, index: number) => (
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
                    <PaginationNext
                        href={pagination.next?.url}
                        className={
                            !pagination.next?.status
                                ? `pointer-events-none`
                                : "hover:drop-shadow hover:bg-white"
                        }
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export { ContentPagination }