import { AspectRatio } from "@/components/elements/aspect-ratio";
import Image from "next/image"
import { Skeleton } from "@/components/elements/skeleton"
import Link from 'next/link';
import { Videos } from "@/lib/client-types";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@/components/elements/avatar";
import { useState } from "react";

const loadingCard = () => {
    return Array.from({ length: 12 }).map((_, index) => (
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
    ));
}

const Card: React.FC<{
    item: Videos[0]
}> = ({ item }) => {

    const [location, setLocation] = useState(window.location || {});

    return(
        <div className="rounded-xl overflow-hidden" onClick={()=> location.href = item.author.channelId}>
            <AspectRatio ratio={16 / 9} >
                <Image
                    src={item.thumbnail}
                    alt={item.title}
                    width={300}
                    height={300}
                    priority={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover h-32"
                />
            </AspectRatio>
            <div className="flex gap-3 items-center bg-primary-foreground dark:bg-primary-foreground justify-between p-2">
                <div>
                    <Link href={item.url}><h1 className="leading-6 text-sm line-clamp-2">{item.title}</h1></Link>
                    <Link href={item.author.channelId} className="text-xs font-medium text-gray-400">{item.author.name}</Link>
                </div>
                <Avatar className='flex-shrink-0 ring-1' onClick={()=> location.href = item.author.channelId}>
                    <AvatarImage
                        src={item.author.avatar}
                        width={48}
                        height={48}
                        className='rounded-full'
                        alt={`@${item.author.name}`} />
                    <AvatarFallback>{item.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}


export const ViewCards: React.FC<{
    data: Array<any>,
    isLoading?: boolean
}> = ({
    data = [],
    isLoading
}) => {
    return (
        <div className="grid grid-cols-4 gap-5 mb-5 mt-10">
            {   isLoading
                ? loadingCard()
                : data.map((item, index) => (
                    <Card item={item} key={index}></Card>
                ))
            }
        </div>
    )
}