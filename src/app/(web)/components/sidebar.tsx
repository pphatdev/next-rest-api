import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/elements/scroll-area"

import { ListChildren } from "@/lib/client-types"
import { classNames } from "@/lib/class-name"
import { usePathname } from "next/navigation"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    playlists: ListChildren
}

export function Sidebar({ className, playlists }: SidebarProps) {
    return (
        <div className={cn("pb-12", className)}>
            <div className="space-y-4 py-4">
                <ScrollArea className="h-[calc(100vh_-9.1rem)] px-1">
                    <ul className="space-y-1 py-2">
                    {playlists.map((item) => (
                        <li key={item.name}>
                            {/* {pathname === item.href
                                ? (item.current = true)
                                : (item.current = false)
                            } */}
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
                </ScrollArea>
            </div>
        </div>
    )
}