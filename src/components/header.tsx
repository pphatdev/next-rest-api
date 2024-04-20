import Link from 'next/link';
import { ModeToggle } from './mode-toggle';

const menu = [
    {
        name: 'Blog',
        href: '/blog',
    },
    {
        name: 'About',
        href: '/about',
    },
    {
        name: 'Contact',
        href: '/contact',
    },
];


export const Header = () => {
    return (
        <div className='w-full bg-white/30 backdrop-blur-lg dark:bg-black/10 dark:backdrop-blur-sm p-3'>
            <header className="max-w-7xl mx-auto flex justify-between items-center gap-3">
                <div>
                    <a href='/'>
                        <div className="relative flex items-center text-3xl font-bold text-gray-800 dark:text-white dark:opacity-80 transition-colors">
                            <h1 className='sr-only'>Leat Sophat</h1>
                            <span className="ml-3 rounded-lg bg-current p-1.5 text-[0.7em] leading-none">
                                <span className="text-white dark:text-black">LS</span>
                            </span>
                        </div>
                    </a>
                </div>
                <nav className='flex justify-end gap-3 items-center font-poppins'>
                    <ul className='hidden sm:flex justify-end gap-5 items-center'>
                        {menu.map((item, index) => (
                            <li key={index}>
                                <Link href={item.href} className='text-gray-800 font-semibold font-poppins dark:text-white hover:text-gray-600 dark:hover:text-gray-400'>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ModeToggle/>
                    <Link href={'/login'} className='rounded-md font-medium font-poppins text-sm bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2'>Login</Link>
                </nav>
            </header>
        </div>
    );
}

export default Header