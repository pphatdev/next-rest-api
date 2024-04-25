import AdminSidebar from '../../../components/admin/sidebar';
import ContentHeader from '../../../components/admin/content-header';
import AdminLayout from '@/components/admin/layout';
import { User } from '@/utils/types';
import { getUser } from './user-data';
import { DataTable } from './user-table';

const pages = [
    { name: 'Projects', href: '#'},
    { name: 'Users', href: '#' },
]


const Dashboards = async () => {

    const data = await getUser('users')
    const result: User[] = data.result

    return (
        <>
            <AdminLayout>
                {/* <AdminSidebar></AdminSidebar> */}

                <header className="py-10 px-3 sm:px-6 lg:px-8 lg:py-6 bg-background">
                    <ContentHeader pages={pages}/>
                </header>

                <main className='px-3 sm:px-8'>
                    <DataTable data={result}></DataTable>
                </main>
{/* 
                <main className={classNames( collapsed ? 'lg:pl-0' :'lg:pl-72', 'transition-all')}>
                    {children}
                </main> */}
            </AdminLayout>
        </>
    )
}


export default Dashboards