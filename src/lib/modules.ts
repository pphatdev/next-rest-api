import { ChartPieIcon } from "@heroicons/react/24/outline";

export const modules = [
    {
        id: 1,
        name: 'Dashboards',
        href: '/',
        children: [
            { id: 1, name: 'Projects', href: '/admin/dashboard', initial: "P", icon: ChartPieIcon, new: 1, current: true },
        ]
    },
    // {
    //     id: 2,
    //     name: 'Projects',
    //     href: '/',
    //     children: [
    //         { id: 1, name: 'Users', href: '/admin/users', initial: 'P', icon: null, new: 0, current: false },
    //         { id: 2, name: 'Projects', href: '/admin/projects', initial: 'P', icon: null, new: 0, current: false },
    //     ]
    // }
]