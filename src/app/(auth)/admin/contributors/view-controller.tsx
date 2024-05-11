import { TableContributor } from "./table"
import { GridContributor } from "./cards"
import { classNames } from "@/lib/class-name"

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
        <div className={classNames( view == 'table' ?'rounded-lg ring-1 ring-black/10 mt-7': 'mt-9')}>
            {
                view == "table"
                ? <TableContributor isLoading={isLoading} data={data}/>
                : <GridContributor isLoading={isLoading} data={data}/>
            }
        </div>
    )
}