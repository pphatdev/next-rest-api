import { ModuleList } from "@/lib/client-types"
import { UserGroupIcon } from "@heroicons/react/24/outline"

export const menu: ModuleList = [
    {
        id: 1,
        name: 'Contributors',
        href: '/',
        children: [
            { id: 1, name: 'Contributors', href: '/admin/contributors', initial: 'P', icon: UserGroupIcon, new: 0, current: false },
        ]
    },
]