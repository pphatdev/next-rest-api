import { ChartPieIcon, FolderArrowDownIcon, FolderOpenIcon, UserGroupIcon } from "@heroicons/react/24/outline";

export const modules = [
    // {
    //     id: 1,
    //     name: 'Dashboards',
    //     href: '/',
    //     children: [
    //         { id: 1, name: 'Projects', href: '/admin/dashboard', initial: "P", icon: ChartPieIcon, new: 1, current: true },
    //     ]
    // },
    {
        id: 2,
        name: 'Contributors',
        href: '/',
        children: [
            { id: 1, name: 'Contributors', href: '/admin/contributors', initial: 'P', icon: UserGroupIcon, new: 0, current: false },
        ]
    },
    {
        id: 3,
        name: 'Projects',
        href: '/',
        children: [
            { id: 1, name: 'Public', href: '#', initial: 'P', icon: FolderOpenIcon, new: 0, current: false },
            { id: 2, name: 'Template', href: '#', initial: 'P', icon: FolderArrowDownIcon, new: 0, current: false },
        ]
    }
]