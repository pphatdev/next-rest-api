import { ListChildren } from "@/lib/client-types"
import { Flame, Tv2, Component, BookImage, BookCheck  } from "lucide-react"


export const menu: ListChildren = [
    { id: 1, name: 'Home', href: '/', icon: Tv2, new: 0, current: false },
    { id: 2, name: 'Trending', href: '/admin', icon: Flame, new: 0, current: false },
    { id: 3, name: 'Category', href: '/admin', icon: Component , new: 0, current: false },
    { id: 4, name: 'Wallpaper', href: '/admin', icon: BookImage, new: 0, current: false },
    { id: 5, name: 'Following', href: '/admin', icon: BookCheck, new: 0, current: false },
]