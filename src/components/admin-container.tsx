import { cn } from '@/lib/utils';
import React from 'react';

const AdminContainer: React.FC<{
    children?: React.ReactNode,
    className?: string
}> = (
    { children, className }
) => {
    return (
        <main className={cn( 'p-5 overflow-y-auto h-[calc(100svh_-5rem)]', className )}>
            {children}
        </main>
    );
};

export default AdminContainer;