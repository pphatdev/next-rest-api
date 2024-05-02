import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/elements/table"
import { CardLoading } from "@/components/loading"
import { DateFormat } from "@/lib/date"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"

export const ViewContribute: React.FC<{
    view?: string | 'table' | 'grid',
    data: Array<any>,
    isLoading: boolean,
}> = ({
    view,
    data,
    isLoading
}) => {
    return (
        <div className='mt-9 rounded-lg ring-1 ring-black/10'>
            {
                view == "table"
                ? <Table className='bg-white rounded-lg'>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[150px]">ID</TableHead>
                            <TableHead className='text-start'>Names</TableHead>
                            <TableHead className='text-start'>Email</TableHead>
                            <TableHead className='hidden sm:flex items-center justify-start'>Join Date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                    {
                        isLoading
                        ? [1,2,3,4,5,6,7,8,9,10].map((_: any, key: number) => (
                            <TableRow key={key}>
                                <TableCell className="font-medium"><div className='h-3 my-1 w-full rounded-full bg-slate-100'></div></TableCell>
                                <TableCell className="font-medium"><div className='h-3 my-1 w-full rounded-full bg-slate-100'></div></TableCell>
                                <TableCell><div className='h-3 my-1 w-full rounded-full bg-slate-100'></div></TableCell>
                                <TableCell><div className='h-3 my-1 w-full rounded-full bg-slate-100'></div></TableCell>
                            </TableRow>
                        ))
                        : Array.from(data).map((user: any) => (
                            <TableRow key={user.id}>
                                <TableCell className="font-medium">UI-{user.id}</TableCell>
                                <TableCell className="font-medium truncate">{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell><DateFormat dateString={user.created_at}></DateFormat></TableCell>
                            </TableRow>
                        ))
                    }
                    </TableBody>
                </Table>
                : <div>
                    { isLoading
                        ? <CardLoading/>
                        : <div className='grid grid-cols-1 odd:divide-y sm:grid-cols-2 md:grid-cols-2 lg:sm:grid-cols-4'>
                            { Array.from(data).map((user: any, key: number) => (
                                <div key={key} className="flex items-center space-x-4 p-3">
                                    <Avatar className='flex-shrink-0'>
                                        <AvatarImage src="https://github.com/shadcn.png" width={50} height={50} className='rounded-full' alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div className="space-y-2 w-full">
                                        <h1 className='leading-tight font-medium'>{user.name}</h1>
                                        <p className='text-sm text-black/70'>{user.email}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            }

        </div>
    )
}