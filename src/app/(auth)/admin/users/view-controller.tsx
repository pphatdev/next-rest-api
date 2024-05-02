import { TableUsers } from "./table"
import { GridUsers } from "./cards"

export const ViewUsers: React.FC<{
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
                ? <TableUsers isLoading={isLoading} data={data}/>
                : <GridUsers isLoading={isLoading} data={data}/>
            }
        </div>
    )
}