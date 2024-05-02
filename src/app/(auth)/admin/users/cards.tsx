import { Avatar, AvatarFallback, AvatarImage } from "@/components/elements/avatar"
import { CardLoading } from "@/components/loading"

export const GridUsers: React.FC<{
    isLoading: boolean
    data: Array<any>
}> = ({
    isLoading,
    data
}) => {
    return(
        <div>
            { isLoading
                ? <CardLoading/>
                : <div className='grid grid-cols-1 odd:divide-y sm:grid-cols-2 md:grid-cols-2 lg:sm:grid-cols-4'>
                    {/* Sample */}
                    { Array.from(data).map((user: any, key: number) => (
                        <div key={key} className="flex items-center space-x-4 p-3">
                            <Avatar className='flex-shrink-0'>
                                <AvatarImage src="https://github.com/shadcn.png" width={50} height={50} className='rounded-full' alt="@pphatdev" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="space-y-2 w-full">
                                <h1 className='leading-tight font-medium'>{user.name}</h1>
                                <p className='text-sm text-black/70'>{user.email}</p>
                            </div>
                        </div>
                    ))}
                    {/* Sample */}
                </div>
            }
        </div>
    )
}