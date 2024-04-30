"use client"
import { useRouter } from "next/navigation"

export function useCurrentRoute() {
    console.log(useRouter());

}