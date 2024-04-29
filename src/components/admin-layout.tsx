"use client"
import React from 'react'
import { cn } from '@/lib/utils'
import { APP_NAME } from '@/configs/env'
import { Inter, Poppins } from 'next/font/google'
import { Metadata } from 'next'
import { modules } from '@/lib/modules'
import AdminSidebarList from './admin-sidebar-list'
import AdminHeader from './admin-header'
import AdminSidebarLogo from './admin-sidebar-logo'
import AdminContainer from './admin-container'
import "../styles/globals.css"

const poppins = Poppins({ weight: "400", subsets: ["latin"] })
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
})

export const metadata: Metadata = {
    title: APP_NAME,
    description: APP_NAME,
}

const AdminLayout: React.FC<{
    children?: React.ReactNode,
    classNames?: string
}> = ({
    children,
    classNames
}) => {
    return (
        <main className={
            cn(
                classNames,
                poppins.className,
                inter.className,
                'flex w-full bg-gray-50 h-svh overflow-y-auto'
            )
        }>
            <div className='fixed -left-full transition-all md:left-0 md:sticky md:block w-72 h-screen shrink-0 text-slate-900 font-poppins border-r border-black/10'>
                <AdminSidebarLogo/>
                <AdminSidebarList modules={modules}/>
            </div>

            <div className='w-full'>
                <AdminHeader/>
                <AdminContainer>
                    {children}
                </AdminContainer>
            </div>
        </main>
    )
}

export default AdminLayout;