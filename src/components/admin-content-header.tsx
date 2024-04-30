import { classNames } from "@/lib/class-name"
import { Button } from "./elements/button"
import { SearchItems } from "./elements/search-items"

type LeftContentHeaderProps = {
    handleSearch?: (event: any) => void,
    search?: string,
    setGrid?: (event: any) => void,
    setList?: (event: any) => void,
    view?: string,
}

const LeftContentHeader: React.FC<LeftContentHeaderProps> = ({
    handleSearch,
    search,
    setGrid,
    setList,
    view
}) => {
    return (
        <div className='flex items-center gap-3'>
            <SearchItems
                name='search'
                type='text'
                value={search}
                className='pl-8'
                placeholder='Search items...'
                onInput={handleSearch}>
            </SearchItems>

            <Button size={'icon'} variant={'outline'} className="hidden sm:flex">
                <svg className='h-6 w-6' viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 18.5H14V16.5H10V18.5ZM3 6.5V8.5H21V6.5H3ZM6 13.5H18V11.5H6V13.5Z" fill="#C7CED9"/>
                </svg>
            </Button>

            <div className='flex items-center'>
                <Button size={'icon'} variant={'outline'} className='rounded-r-none' onClick={setGrid}>
                    <svg className={classNames( view == 'grid' ? 'text-primary' : 'text-slate-300', 'h-6 w-6')} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 3.5V11.5H11V3.5H3ZM9 9.5H5V5.5H9V9.5ZM3 13.5V21.5H11V13.5H3ZM9 19.5H5V15.5H9V19.5ZM13 3.5V11.5H21V3.5H13ZM19 9.5H15V5.5H19V9.5ZM13 13.5V21.5H21V13.5H13ZM19 19.5H15V15.5H19V19.5Z" fill="currentColor"/>
                    </svg>
                </Button>

                <Button size={'icon'} variant={'outline'} className='rounded-l-none border-l-0' onClick={setList}>
                    <svg className={classNames( view == 'table' ? 'text-primary' : 'text-slate-300', 'h-6 w-6')} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 18.5H21V16.5H3V18.5ZM3 13.5H21V11.5H3V13.5ZM3 6.5V8.5H21V6.5H3Z"  fill="currentColor"/>
                    </svg>
                </Button>
            </div>
        </div>
    )
}

export { LeftContentHeader }