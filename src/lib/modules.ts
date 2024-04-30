import { ChartPieIcon, UserGroupIcon } from "@heroicons/react/24/outline";

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
        name: 'Projects',
        href: '/',
        children: [
            { id: 1, name: 'Contributors', href: '/admin/projects/contributors', initial: 'P', icon: UserGroupIcon, new: 0, current: false },
        ]
    }
]