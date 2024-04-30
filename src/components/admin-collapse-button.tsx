"use client"
import { ButtonType as T } from "@/lib/types";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const CollapseButton: React.FC<T& { onClick?: ( e: React.MouseEvent )=> void }> = ({
    className,
    children,
    href,
    props,
    onClick
}) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const route = useRouter();
    return (
        <button
            className={className}
            ref={buttonRef}
            onClick={onClick}
            // onClick={() => href && route.push(href)}
            {...props}
        >
            {children}
        </button>
    );
};

export default CollapseButton