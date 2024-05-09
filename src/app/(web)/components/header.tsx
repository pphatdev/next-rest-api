import { Logo } from '@/assets/logo';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/elements/avatar';
import { Button } from '@/components/elements/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from '@/components/elements/dropdown-menu';
import { ModeToggle } from '@/components/theme-button';
import { AlignLeft, CircleUser, Cog, EllipsisVertical, LogOut } from 'lucide-react';
import Link from 'next/link';

export const Header: React.FC<{
    isLoading?: boolean
    data?: Array<any>
}> = ({
    isLoading,
    data
}) => {
        return (
            <header className="w-full border-b">
                <nav className="max-w-7xl flex items-center justify-between mx-auto px-4 sm:px-6 lg:px-8 h-16">
                    <div className='flex items-center gap-1 justify-start'>
                        <Button variant="ghost" size={'icon'}>
                            <AlignLeft className='w-5 h-5' />
                        </Button>
                        <Logo/>
                    </div>
                    <nav role="menu">
                        <ul role="menubar" className="flex items-center justify-end gap-5">
                            <li role="menuitem">
                                <ModeToggle></ModeToggle>
                                {/* <Button variant="ghost" size={'icon'}>
                                    <EllipsisVertical className='w-5 h-5'></EllipsisVertical>
                                </Button> */}
                                {/* <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-48" align="end">
                                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                    </DropdownMenuContent>
                                </DropdownMenu> */}
                            </li>
                            <li role="menuitem">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant={'ghost'} size={'icon'} className='rounded-full'>
                                            <Avatar className='flex-shrink-0'>
                                                <AvatarImage
                                                    src="https://github.com/pphatdev.png"
                                                    width={48}
                                                    height={48}
                                                    className='rounded-full'
                                                    alt="@pphatdev" />
                                                <AvatarFallback>LS</AvatarFallback>
                                            </Avatar>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-48" align='end'>
                                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>
                                            <Link href={'/'} className='flex items-center w-full justify-between'>
                                                <CircleUser className="mr-2 h-4 w-4"/>
                                                <span>Profile</span>
                                                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Link href={'/'} className='flex items-center w-full justify-between'>
                                                <Cog className="mr-2 h-4 w-4"/>
                                                <span>Setting</span>
                                                <DropdownMenuShortcut>⇧⌘S</DropdownMenuShortcut>
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Link href={'/'} className='flex items-center w-full justify-between'>
                                                <LogOut className="mr-2 h-4 w-4" />
                                                <span>Log out</span>
                                                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                                            </Link>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>

                            </li>
                        </ul>
                    </nav>
                </nav>
            </header>
        )
    }