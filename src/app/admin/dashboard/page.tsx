import AdminSidebar from '../../../components/admin/sidebar';
import ContentHeader from '../../../components/admin/content-header';
import AdminLayout from '@/components/admin/layout';
import { DataTable } from '@/components/admin/container';

const pages = [
    { name: 'Projects', href: '#', current: false },
    { name: 'Project Nero', href: '#', current: true },
]

export default function Dashboards() {

    return (
        <AdminLayout>
            <AdminSidebar>
                <header className="py-10 px-3 sm:px-6 lg:px-8 lg:py-6 bg-background">
                    <ContentHeader pages={pages}/>
                </header>
                <main className='px-3 sm:px-8'>
                    {/* <DataTable></DataTable> */}
                </main>
            </AdminSidebar>
        </AdminLayout>
    )
}
