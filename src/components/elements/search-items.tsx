import { cn } from "@/lib/utils"
import * as React from "react"
import { InputProps } from "./input"

// export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

export const SearchItems = React.forwardRef<HTMLInputElement, InputProps>(
({ className, type, ...props }, ref) => {
    return (
        <div className="flex-1 text-sm font-semibold leading-6 text-gray-500 relative">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 absolute top-1/2 -translate-y-1/2 left-2">
                <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clipRule="evenodd" />
            </svg>
            <input
                type={type}
                className={
                    cn(
                        "pl-8 w-full px-2 text-sm dark:text-white max-w-sm rounded-md font-medium py-2 border-none bg-background ring-1 focus:ring-1 focus:ring-primary/50 ring-black/10 dark:ring-white/10",
                        className
                    )
                }
                ref={ref}
                {...props}
            />
        </div>
    )
})