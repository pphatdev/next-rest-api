import { Skeleton } from "./elements/skeleton"

export const CardLoading = () => {
    return (
        <div className='px-4 py-3 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:sm:grid-cols-4'>
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
    )
}