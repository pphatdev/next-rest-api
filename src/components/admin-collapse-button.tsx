"use client"
import { ButtonType as T } from "@/utils/types";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const CollapseButton: React.FC<T> = ({
    className,
    children,
    href,
    props,
}) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const route = useRouter();
    return (
        <button
            className={className}
            ref={buttonRef}
            onClick={() => href && route.push(href)}
            {...props}
        >
            {children}
        </button>
    );
};

export default CollapseButton