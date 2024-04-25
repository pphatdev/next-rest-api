"use client";

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    // CalendarIcon,
    Bars3BottomRightIcon,
    ChartPieIcon,
    // DocumentDuplicateIcon,
    // FolderIcon,
    // HomeIcon,
    // UsersIcon,
    XMarkIcon,
    BellIcon,
    Bars3BottomLeftIcon
} from '@heroicons/react/24/outline'


import logo from '../../assets/logo.svg'
import { usePathname } from 'next/navigation'
import { classNames } from '@/utils/class-name';
import { ModeToggle } from '../mode-toggle';

export default function AdminSidebar(){

    const pathname = usePathname()
    const modules = [
        {
            id: 1,
            name: 'Dashboards',
            href: '/',
            children: [
                { id: 1, name: 'Projects', href: '/admin/dashboard', initial: "P", icon: ChartPieIcon, new: 1, current: true },
            ]
        },
        {
            id: 2,
            name: 'Projects',
            href: '/',
            children: [
                { id: 1, name: 'Users', href: '/admin/users', initial: 'P', icon: null, new: 0, current: false },
                { id: 2, name: 'Projects', href: '/admin/projects', initial: 'P', icon: null, new: 0, current: false },
            ]
        }
    ]

    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [collapsed, setCollapsed] = useState(false)


    return (
        <>
            <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-900/20" />
                    </Transition.Child>

                    <div className="fixed inset-0 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative flex w-full max-w-72 flex-1">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute -right-2 top-0 flex w-16 justify-center pt-5">
                                        <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                                            <span className="sr-only">Close sidebar</span>
                                            <XMarkIcon className="h-6 w-6 text-slate-400" aria-hidden="true" />
                                        </button>
                                    </div>
                                </Transition.Child>
                                {/* Sidebar component, swap this element with another sidebar if you like */}
                                <div className="flex grow flex-col gap-y-0 overflow-y-auto bg-white pb-2">
                                    <div className="flex h-20 shrink-0 items-center px-3">
                                        <img
                                            className="h-10 w-auto"
                                            src={logo.src}
                                            alt="Your Company"
                                        />
                                    </div>
                                    <nav className="flex flex-1 border-t flex-col px-5">
                                        <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                            <li>
                                                {modules.map((menu, index) => (
                                                    <div key={index}>
                                                        <div className="-mx-1 flex items-center justify-between mt-2 text-sm uppercase font-bold font-poppins leading-6 text-slate-400">
                                                            <div>
                                                                {menu.name}
                                                            </div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-primary">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                                            </svg>
                                                        </div>
                                                        <ul role="list" className="-mx-1 mt-2 space-y-1 [&>*]:font-poppins font-medium">
                                                            {menu.children.map((item, ind) => (
                                                                <li key={ind}>
                                                                    { pathname == item.href ? item.current = true : item.current = false }
                                                                    <a
                                                                        href={item.href}
                                                                        className={classNames(
                                                                            item.current
                                                                                ? 'bg-gray-50 text-primary-600'
                                                                                : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50',
                                                                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                                        )}
                                                                    >
                                                                        {item?.icon
                                                                            ? <item.icon
                                                                                className={classNames(
                                                                                    item.current ? 'text-primary-600' : 'text-gray-400 group-hover:text-primary-600',
                                                                                    'h-6 w-6 shrink-0'
                                                                                )}
                                                                                aria-hidden="true"
                                                                            />
                                                                            : <span
                                                                                className={classNames(
                                                                                    item.current
                                                                                        ? 'text-primary-600 border-primary-600 bg-primary-50'
                                                                                        : 'text-gray-400 border-gray-200 group-hover:border-primary-600 group-hover:text-primary-600',
                                                                                    'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white'
                                                                                )}
                                                                            >
                                                                                {String(item.name).charAt(0)}
                                                                            </span>
                                                                        }
                                                                        {item.name}
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            {/* Static sidebar for desktop */}
            <div className={classNames(
                collapsed ? 'lg:w-0' : 'lg:w-72',
                "hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:flex-col transition-all"
            )}>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-0 overflow-y-auto border-r border-gray-200 dark:border-white/10 dark:bg-background">
                    <div className="flex items-center justify-between h-20 shrink-0 border-b px-2">
                        <div className='flex items-center justify-start'>
                            <img
                                className="h-10 w-auto"
                                src={logo.src}
                                alt="Your Company"
                            />
                            <span className='text-2xl font-normal text-foreground'>Beta</span>
                        </div>

                        <button type="button" className="m-2.5 p-2.5 text-gray-700" onClick={() => setCollapsed(true) }>
                            <span className="sr-only">Open sidebar</span>
                            <Bars3BottomRightIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <nav className="flex flex-1 pt-3 flex-col px-6">
                        <ul role="list" className="flex flex-1 flex-col gap-y-7">
                            <li>
                                {modules.map((menu, ind) => (
                                    <div key={ind}>
                                        <div className={classNames( "-mx-2 flex justify-between mt-2 text-sm uppercase font-bold font-poppins leading-6 text-slate-400")}>
                                            <h1>
                                                {menu.name}
                                            </h1>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-primary">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                            </svg>
                                        </div>
                                        <ul role="list" className="-mx-2 mt-2 space-y-1">
                                            <li>
                                                <ul role="list" className="-mx-2 space-y-1">
                                                    {menu.children.map((item) => (
                                                        <li key={item.name}>
                                                            { pathname == item.href ? item.current = true : item.current = false }
                                                            <a
                                                                href={item.href}
                                                                className={classNames(
                                                                    item.current
                                                                        ? 'bg-gray-50 text-primary-600 dark:bg-primary/10'
                                                                        : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50 dark:hover:bg-primary/10 dark:text-slate-300',
                                                                    'group flex items-center relative gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                                )}
                                                            >
                                                                {item?.icon
                                                                    ? <item.icon
                                                                        className={classNames(
                                                                            item.current ? 'text-primary-600' : 'text-gray-400 group-hover:text-primary-600 dark:text-primary',
                                                                            'h-6 w-6 shrink-0'
                                                                        )}
                                                                        aria-hidden="true"
                                                                    />
                                                                    : <span
                                                                        className={classNames(
                                                                            item.current
                                                                                ? 'text-primary-600 border-primary-600 bg-primary-50 dark:bg-primary/20'
                                                                                : 'text-gray-400 dark:bg-primary/10 border-gray-200 dark:border-primary/20 group-hover:border-primary-600 group-hover:text-primary-600',
                                                                            'flex h-6 w-6 flex-shrink-0 text-xs items-center justify-center rounded-lg border text-[0.625rem] font-bold bg-white'
                                                                        )}
                                                                    >
                                                                        {String(item.name).charAt(0)}
                                                                    </span>
                                                                }
                                                                <span>{item.name}</span>

                                                                {item?.new
                                                                    ? <span className={classNames('px-1.5 drop-shadow-sm ml-auto flex items-center justify-center h-4 text-[0.6rem] rounded-md font-black text-red-600 dark:text-white bg-background')}>{item.new}</span>
                                                                    : ``
                                                                }
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                ))}
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className={classNames( collapsed ? " lg:pl-0": " lg:pl-72", "sticky transition-all h-20 top-0 z-40 flex border-b items-center gap-x-6 bg-background px-4 py-4 sm:px-6")}>

                <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
                    <span className="sr-only">Open sidebar</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>

                <button type="button" className={ classNames( collapsed ? '': "hidden", "ml-3 p-2.5 text-gray-700")} onClick={() => setCollapsed(false) }>
                    <span className="sr-only">Open sidebar</span>
                    <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                <div className='lg:px-5 w-full'>
                    <div className="flex-1 text-sm font-semibold leading-6 text-gray-900 relative">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-foreground absolute top-1/2 -translate-y-1/2 left-2">
                            <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clipRule="evenodd" />
                        </svg>

                        <input type="text" placeholder='Search Everything!' className='pl-8 w-full px-2 text-sm dark:text-white max-w-sm rounded-md font-medium py-2 border-none bg-background ring-2 focus:ring-2 focus:ring-primary/50 ring-black/10 dark:ring-white/10'/>
                    </div>
                </div>

                <div className='flex justify-end flex-shrink-0 items-center gap-x-4'>

                    <a href="#" className='rounded-full relative ring-2 ring-white dark:ring-background'>
                        <BellIcon className="h-[1.5rem] w-[1.5rem] text-slate-500"/>
                    </a>

                    <ModeToggle/>

                    <a href="#" className='rounded-full relative ring-2 ring-white dark:ring-primary-400 drop-shadow'>
                        <span className="sr-only">Leat Sophat</span>
                        <img
                            className="h-8 w-8 object-cover rounded-full bg-gray-50"
                            src="https://avatars.githubusercontent.com/u/65520537?v=4"
                            alt="Leat Sophat"
                            style={
                                {
                                    overflowClipMargin: 'unset',
                                    objectPosition: 'center'
                                }
                            }
                        />
                        <span className="absolute -bottom-0.5 right-0 flex h-2 w-2 ring-2 ring-white rounded-full">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-600 "></span>
                        </span>
                    </a>
                </div>
            </div>
            <main className={classNames( collapsed ? 'lg:pl-0' :'lg:pl-72', 'transition-all')}>
                {/* {children} */}
            </main>
        </>
    )
}
