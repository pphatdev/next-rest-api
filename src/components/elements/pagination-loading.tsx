import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious } from "./pagination"

export const PaginationLoading = () => {
    return(
        <Pagination className='mt-5'>
            <PaginationContent>
                <PaginationItem className="mr-7">
                    <PaginationLink className="flex gap-1 flex-shrink-0">
                        <div className="h-3 w-3 flex-shrink-0 rounded-full bg-slate-300"></div>
                        <div className="h-3 w-12 flex-shrink-0 rounded-full bg-slate-300"></div>
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink isActive={true} className='h-10 w-10 bg-slate-50 drop-shadow animate-pulse'><div className="h-3 w-3 rounded-full bg-slate-300"></div></PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink className='h-10 w-10 bg-slate-100 animate-pulse'><div className="h-3 w-3 rounded-full bg-slate-300"></div></PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink className='h-10 w-10 bg-slate-100 animate-pulse'><div className="h-3 w-3 rounded-full bg-slate-300"></div></PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink className='h-10 w-10 bg-slate-100 animate-pulse'><div className="h-3 w-3 rounded-full bg-slate-300"></div></PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink className='h-10 w-10 bg-slate-100 animate-pulse'><div className="h-3 w-3 rounded-full bg-slate-300"></div></PaginationLink>
                </PaginationItem>
                <PaginationItem className="ml-7">
                    <PaginationLink className="flex gap-1 flex-shrink-0">
                        <div className="h-3 w-12 flex-shrink-0 rounded-full bg-slate-300"></div>
                        <div className="h-3 w-3 flex-shrink-0 rounded-full bg-slate-300"></div>
                    </PaginationLink>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}