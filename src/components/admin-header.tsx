import { cn } from '@/lib/utils';
import { BellIcon } from 'lucide-react';
import React from 'react';
import Image from 'next/image';
import CollapseButton from './admin-collapse-button';
// import { ModeToggle } from './theme-button';

const AdminHeader: React.FC<{className?: string, collapseHandle?: (e: React.MouseEvent) => void }> = ({ className, collapseHandle }) => {
    return (
        <header className={ cn( 'border-b border-black/10 h-16 md:h-20 sticky transition-all top-0 z-40 flex items-center gap-x-6 bg-background px-4 py-4 sm:px-6', className )}>

            <div className='w-full flex items-center justify-start gap-3'>
                <CollapseButton onClick={collapseHandle} className='lg:hidden'>
                    <svg className='h-7 w-7 text-slate-400' viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.20011 25.125H21.0959C21.8407 25.125 22.4501 24.5156 22.4501 23.7708C22.4501 23.026 21.8407 22.4167 21.0959 22.4167H6.20011C5.45532 22.4167 4.84595 23.026 4.84595 23.7708C4.84595 24.5156 5.45532 25.125 6.20011 25.125ZM6.20011 18.3542H17.0334C17.7782 18.3542 18.3876 17.7448 18.3876 17C18.3876 16.2552 17.7782 15.6458 17.0334 15.6458H6.20011C5.45532 15.6458 4.84595 16.2552 4.84595 17C4.84595 17.7448 5.45532 18.3542 6.20011 18.3542ZM4.84595 10.2292C4.84595 10.974 5.45532 11.5833 6.20011 11.5833H21.0959C21.8407 11.5833 22.4501 10.974 22.4501 10.2292C22.4501 9.48437 21.8407 8.875 21.0959 8.875H6.20011C5.45532 8.875 4.84595 9.48437 4.84595 10.2292ZM28.273 20.9L24.373 17L28.273 13.1C28.8012 12.5719 28.8012 11.7187 28.273 11.1906C27.7449 10.6625 26.8918 10.6625 26.3637 11.1906L21.5022 16.0521C20.9741 16.5802 20.9741 17.4333 21.5022 17.9615L26.3637 22.8229C26.8918 23.351 27.7449 23.351 28.273 22.8229C28.7876 22.2948 28.8012 21.4281 28.273 20.9Z" fill="currentColor"/>
                    </svg>
                </CollapseButton>
                <div className="flex-1 hidden sm:block text-sm font-semibold leading-6 text-gray-900 relative">
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
                <li>
                    {/* <ModeToggle/> */}
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