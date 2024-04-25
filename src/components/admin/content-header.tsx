import Breadcrumb from './breadcrumb';
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"


export default function ContentHeader({ pages }: { pages: any }) {
    return (
        <nav className="flex justify-between" aria-label="Breadcrumb">
            { Breadcrumb(pages) }
            <Menubar>
                <MenubarMenu>
                    <svg className='h-6 w-6 text-primary' viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 3.5V11.5H11V3.5H3ZM9 9.5H5V5.5H9V9.5ZM3 13.5V21.5H11V13.5H3ZM9 19.5H5V15.5H9V19.5ZM13 3.5V11.5H21V3.5H13ZM19 9.5H15V5.5H19V9.5ZM13 13.5V21.5H21V13.5H13ZM19 19.5H15V15.5H19V19.5Z" fill="currentColor"/>
                    </svg>
                </MenubarMenu>
                <MenubarMenu>
                    <svg className='h-6 w-6 text-slate-600' viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 18.5H21V16.5H3V18.5ZM3 13.5H21V11.5H3V13.5ZM3 6.5V8.5H21V6.5H3Z" fill="currentColor"/>
                    </svg>
                </MenubarMenu>
            </Menubar>

        </nav>
    )
}