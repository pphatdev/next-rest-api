import { cn } from '@/lib/utils';
import { BellIcon } from 'lucide-react';
import React from 'react';
import Image from 'next/image';

const AdminHeader: React.FC<{className?: string }> = ({ className }) => {
    return (
        <header className={ cn( 'border-b border-black/10 h-20 sticky transition-all top-0 z-40 flex items-center gap-x-6 bg-background px-4 py-4 sm:px-6', className )}>

            <div className='w-full'>
                <div className="flex-1 text-sm font-semibold leading-6 text-gray-900 relative">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-foreground absolute top-1/2 -translate-y-1/2 left-2">
                        <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clipRule="evenodd" />
                    </svg>
                    <input type="text" placeholder='Search Everything!' className='pl-8 w-full px-2 text-sm dark:text-white max-w-sm rounded-md font-medium py-2 border-none bg-background ring-2 focus:ring-2 focus:ring-primary/50 ring-black/10 dark:ring-white/10'/>
                </div>
            </div>

            <ul role='list' className='flex justify-end flex-shrink-0 items-center gap-x-5'>
                <li>
                    <a href="#" className='rounded-full relative ring-2 ring-white dark:ring-background'>
                        <BellIcon className="h-5 w-5 text-slate-500"/>
                    </a>
                </li>

                <li className='relative'>
                    <div className='rounded-full overflow-hidden ring-2 ring-white dark:ring-primary-400 drop-shadow'>
                        <span className="sr-only">Leat Sophat</span>
                        <Image
                            width={32}
                            height={32}
                            className="object-cover rounded-full bg-gray-50"
                            src={'https://avatars.githubusercontent.com/u/65520537?v=4'}
                            alt={'Leat Sophat'}
                            style={{
                                all: "inherit",
                                overflowClipMargin: 'unset',
                                objectPosition: 'center'
                            }}
                            >
                        </Image>
                    </div>
                    <span className="absolute -bottom-0.5 right-0 flex h-2 w-2 ring-2 ring-white rounded-full">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-600 "></span>
                    </span>
                </li>
            </ul>
        </header>
    );
};

export default AdminHeader;