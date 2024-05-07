import { Skeleton } from "./elements/skeleton"

export const SkeletonCard = () => {
    return (
        <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>
    )
}


export const CardLoading = () => {
    return (
        <div className='px-4 py-3 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:sm:grid-cols-4 max-w-7xl mx-auto'>
            <SkeletonCard></SkeletonCard>
            <SkeletonCard></SkeletonCard>
            <SkeletonCard></SkeletonCard>
            <SkeletonCard></SkeletonCard>
            <SkeletonCard></SkeletonCard>
            <SkeletonCard></SkeletonCard>
            <SkeletonCard></SkeletonCard>
            <SkeletonCard></SkeletonCard>
            <SkeletonCard></SkeletonCard>
            <SkeletonCard></SkeletonCard>
            <SkeletonCard></SkeletonCard>
            <SkeletonCard></SkeletonCard>
        </div>
    )
}