import { CardLoading } from "@/components/loading"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { TableContributor } from "./table"
import { GridContributor } from "./cards"

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
                ? <TableContributor isLoading={isLoading} data={data}/>
                : <GridContributor isLoading={isLoading} data={data}/>
            }
        </div>
    )
}