"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
} from "@/components/elements/card"
import { Input } from "@/components/elements/input"
import { Label } from "@/components/elements/label"
import { Container } from '@/components/container';
import { StarBoard } from '@/components/stars';
import Link from "next/link"
import LoginButton from "@/components/elements/login-button";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState('test@pphat.me')
    const [password, setPassword] = useState('123')
    return(
        <StarBoard>
            <div className="absolute bg-black z-1 inset-0 overflow-hidden opacity-20">
                <div className="jumbo absolute -inset-[10px] opacity-50"></div>
            </div>
            <Container>
                <div className='dark h-screen flex items-center justify-center font-poppins text-white'>
                <Card className="max-w-sm px-3 py-6 w-full bg-white/5 backdrop-blur-[2px] border-0 dark">
                    <CardHeader>
                        <div>
                            <a href='/'>
                                <div className="relative justify-center flex items-center text-4xl font-bold dark:text-gray-800 text-white dark:opacity-80 transition-colors">
                                    <span className="mr-3 rounded-full bg-current p-2.5 flex items-center justify-center text-[0.7em] leading-none">
                                        <span className="dark:text-white mb-0.5 text-black">LS</span>
                                    </span>
                                    <h1 className="text-slate-50 uppercase mb-1 text-4xl whitespace-nowrap font-bold">Leat <span className="font-normal">Sophat</span></h1>
                                </div>
                            </a>
                        </div>
                        <CardDescription className="text-center mt-10">Welcome to leatsophat.me</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="grid w-full items-center gap-6">
                                <div className="flex flex-col space-y-1.5">
                                    <Label className="text-white" htmlFor="email">Email</Label>
                                    <Input value={email} onInput={(e: any)=> setEmail(e.target.value)} className="bg-transparent text-slate-200 focus-visible:ring-slate-800 focus-visible:outline-none" id="email" placeholder="info.name@domain.com"/>
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label className="text-white" htmlFor="password">Password</Label>
                                    <Input type="password" value={password} onInput={(e: any)=> setPassword(e.target.value)} className="bg-transparent text-slate-200 focus-visible:ring-slate-800 focus-visible:outline-none" id="password" placeholder="Password"/>
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex gap-2 justify-end mt-3">
                        <Link href="/" className="transition-all bg-transparent hover:bg-white/5 text-white ring-1 ring-inset ring-primary/10 py-2 px-5 inline-flex items-center justify-center focus:outline-none whitespace-nowrap rounded-md text-sm font-medium">Back</Link>
                        <LoginButton goto={'/admin/contributors'}/>
                    </CardFooter>
                </Card>
                </div>
            </Container>
        </StarBoard>
    )
}