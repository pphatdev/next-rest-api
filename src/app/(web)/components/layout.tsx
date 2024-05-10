import { Container } from '@/components/container';

import { Header } from '../components/header';
import { menu } from '@/data/menu';
import Sibdebar from '../components/sidebar';
import { ScrollArea } from '@/components/elements/scroll-area';

export default function WebLayout(
    { children, }: Readonly<{ children: React.ReactNode; }>
) {
    return (
        <>
            <Header/>
            <Container>
                <div className="grid lg:grid-cols-5">
                    <Sibdebar modules={menu}/>
                    <div className="col-span-3 lg:col-span-4 lg:border-l relative">
                        <ScrollArea className="h-[calc(100vh_-4.2rem)] px-5">
                            {children}
                            <svg className="absolute pointer-events-none -z-10 inset-0 h-full w-full stroke-gray-300 dark:stroke-gray-800 opacity-50 [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)]" aria-hidden="true">
                                <defs>
                                    <pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                                        <path d="M100 200V.5M.5 .5H200" fill="none"></path>
                                    </pattern>
                                </defs>
                                <svg x="50%" y="-1" className="overflow-visible fill-gray-50 dark:fill-slate-800">
                                    <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0"></path>
                                </svg>
                                <rect width="100%" height="100%" stroke-width="0" fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"></rect>
                            </svg>
                        </ScrollArea>
                    </div>
                </div>
            </Container>
        </>
    );
}
