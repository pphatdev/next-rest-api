import { classNames } from "@/lib/class-name";
import { ModuleList } from "@/lib/client-types"
import { usePathname } from "next/navigation";

const AdminSidebarList: React.FC<{
    modules: ModuleList
}> = (
    { modules }
) => {

    const pathname = usePathname()
    return (
        <nav className="flex flex-1 pt-3 flex-col px-6">
            <ul role="list" className="flex flex-1 flex-col gap-y-3">
                {modules.map((menu, index) => (
                    <li key={index}>
                        <div className='-mx-2 flex justify-between mt-2 text-sm uppercase font-bold font-poppins leading-6 text-[#98A2B2]'>
                            <h1>{menu.name}</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-primary">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                            </svg>
                        </div>
                        <ul role="list" className="-mx-2 mt-2 space-y-1">
                            <li>
                                <ul role="list" className="-mx-2 space-y-1">
                                    {menu.children.map((item) => (
                                        <li key={item.name}>
                                            {pathname === item.href
                                                ? (item.current = true)
                                                : (item.current = false)
                                            }
                                            <a
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? "bg-gray-50 text-primary-600 dark:bg-primary/10"
                                                        : "text-gray-700 hover:text-primary-600 hover:bg-gray-50 dark:hover:bg-primary/10 dark:text-slate-300",
                                                    "group flex items-center relative gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                                )}
                                            >
                                                {item?.icon ? (
                                                    <item.icon
                                                        className={classNames(
                                                            item.current
                                                                ? "text-primary-600"
                                                                : "text-gray-400 group-hover:text-primary-600 dark:text-primary",
                                                            "h-6 w-6 shrink-0"
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                ) : (
                                                    <span
                                                        className={classNames(
                                                            item.current
                                                                ? "text-primary-600 border-primary-600 bg-primary-50 dark:bg-primary/20"
                                                                : "text-gray-400 dark:bg-primary/10 border-gray-200 dark:border-primary/20 group-hover:border-primary-600 group-hover:text-primary-600",
                                                            "flex h-6 w-6 flex-shrink-0 text-xs items-center justify-center rounded-lg border text-[0.625rem] font-bold bg-white"
                                                        )}
                                                    >
                                                        {String(item.name).charAt(0)}
                                                    </span>
                                                )}
                                                <span>{item.name}</span>

                                                {item?.new ? (
                                                    <span className={classNames( "px-1.5 drop-shadow-sm ml-auto flex items-center justify-center h-4 text-[0.6rem] rounded-md font-black text-red-600 dark:text-white bg-background" )}>
                                                        {item.new}
                                                    </span>
                                                ) : ('')}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    </li>
                ))}
            </ul>
        </nav>
    );
};


export default AdminSidebarList