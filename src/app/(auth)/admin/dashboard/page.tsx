import AdminLayout from '../../../../components/admin-layout';
import AdminBreadcrumb from '@/components/admin-breadcrumb';

export default function Home() {
    const pages = [
        { name: 'Dashboards', href: '/admin/dashboard', current: false},
        { name: 'Projects', href: null, current: false },
    ]
    return (
        <AdminLayout>
            <header className='flex items-center justify-between gap-3'>
                <AdminBreadcrumb pages={pages}/>
                <AdminBreadcrumb pages={pages}/>
            </header>
        </AdminLayout>
    );
}
