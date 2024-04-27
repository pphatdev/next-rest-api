import { Button } from '@/components/elements/button';
import AdminLayout from '../../../../components/admin-layout';
import AdminBreadcrumb from '@/components/admin-breadcrumb';
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/elements/table';

export default function Prjects() {
    const pages = [
        { name: 'Dashboards', href: '/admin/dashboard', current: false},
        { name: 'Projects', href: null, current: false },
    ]
    const invoices = [
        {
            invoice: "INV001",
            paymentStatus: "Paid",
            totalAmount: "$250.00",
            paymentMethod: "Credit Card",
        },
    ]
    return (
        <AdminLayout>
            <header className='flex items-center justify-between gap-3'>
                <AdminBreadcrumb pages={pages}/>
                {/* <AdminBreadcrumb pages={pages}/> */}
            </header>
            <div className='mt-9 rounded-lg ring-1 ring-black/10'>
                {/* <DataTableDemo/> */}

                <Table className='bg-white rounded-lg'>
                    {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Invoice</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className='hidden sm:flex items-center justify-start'>Method</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices.map((invoice) => (
                            <TableRow key={invoice.invoice}>
                                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                                <TableCell className='hidden sm:block'>{invoice.paymentStatus}</TableCell>
                                <TableCell>{invoice.paymentMethod}</TableCell>
                                <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={3}>Total</TableCell>
                            <TableCell className="text-right">$2,500.00</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </AdminLayout>
    );
}
