import { TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/elements/table"
import { DateFormat } from "@/lib/date"
import { Table } from "lucide-react"

type TTableUser = {
    // isLoading?: boolean,
    data: Array<any>,
}

const TableUser: React.FC<TTableUser> = ({
    // isLoading,
    data
}) => {
    console.log(data);

    return(
        <Table className='bg-white rounded-lg'>
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
                // isLoading
                // ? [1,2,3,4,5,6,7,8,9,10].map((_: any, key: number) => (
                //     <TableRow key={key}>
                //         <TableCell className="font-medium"><div className='h-3 my-1 w-full rounded-full bg-slate-100'></div></TableCell>
                //         <TableCell className="font-medium"><div className='h-3 my-1 w-full rounded-full bg-slate-100'></div></TableCell>
                //         <TableCell className='hidden sm:block'><div className='h-3 my-1 w-full rounded-full bg-slate-100'></div></TableCell>
                //         <TableCell><div className='h-3 my-1 w-full rounded-full bg-slate-100'></div></TableCell>
                //     </TableRow>
                // ))
                // :
                Array.from(data).map((user: any) => (
                    <TableRow key={user.id}>
                        <TableCell className="font-medium">UI-{user.id}</TableCell>
                        <TableCell className="font-medium truncate">{user.name}</TableCell>
                        <TableCell className='hidden sm:block'>{user.email}</TableCell>
                        <TableCell><DateFormat dateString={user.created_at}></DateFormat></TableCell>
                    </TableRow>
                ))
            }
            </TableBody>
        </Table>
    )
}

export { TableUser }