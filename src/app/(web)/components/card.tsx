import { AspectRatio } from "@/components/elements/aspect-ratio";
import Image from "next/image"
import { Skeleton } from "@/components/elements/skeleton"
import Link from 'next/link';
import logo from "../../../assets/logo.svg"

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


export const Card: React.FC<{
    data: Array<any>,
    isLoading?: boolean
}> = ({
    data = [],
    isLoading
}) => {
    return (
        <div className="mt-10">
            {
                isLoading
                    ? loadingCard()
                    : <div className="grid grid-cols-4 gap-5">
                    <div className="rounded-xl overflow-hidden">
                        <AspectRatio ratio={16 / 9} >
                            <Image
                                src="https://m.media-amazon.com/images/M/MV5BMmY0NGZjMDgtZTVjOC00ZTIzLWE4OTEtNzMyMTkzOGI2NjExXkEyXkFqcGdeQXVyMTY4MzA3MjE1._V1_.jpg"
                                alt="Photo by Drew Beamer"
                                fill
                                className="object-cover h-32"
                            />
                        </AspectRatio>
                        <div className="flex gap-3 items-center bg-primary dark:bg-primary-foreground justify-between p-2">
                            <div>
                                <h1 className="leading-6 text-sm line-clamp-2">Battle Through the Heavens</h1>
                                <Link href={'/'} className="text-xs font-medium text-gray-400">PPhat Dev</Link>
                            </div>
                            <Link href={'/'} className="flex flex-shrink-0 ring-1 ring-inset overflow-hidden rounded-full">
                                <Image
                                    src={logo.src}
                                    alt="Photo by Drew Beamer"
                                    width={200}
                                    height={200}
                                    className="object-cover rounded-full h-10 w-10"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}