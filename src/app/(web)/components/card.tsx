import { Skeleton } from "@/components/elements/skeleton"

const loadingCard = () => {
    return (
        <div className="grid grid-cols-4 gap-5">
            {Array.from({ length: 12 }).map((_, index) => (
                <div key={index} className="flex flex-col space-y-3">
                    <Skeleton className="h-[125px] w-full rounded-xl" />
                    <div className="space-y-2 flex  w-full">
                        <div className="flex justify-between w-full gap-2">
                            <div className="w-full gap-2 flex flex-col">
                                <Skeleton className="h-4 w-full flex-shrink-0" />
                                <Skeleton className="h-3 w-1/2 flex-shrink-0" />
                                <Skeleton className="h-2 w-full flex-shrink-0" />
                            </div>
                            <Skeleton className="rounded-full h-11 w-11 flex-shrink-0" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}


export const Card = () => {
    return (
        <div className="mt-10">
            {loadingCard()}
        </div>
    )
}