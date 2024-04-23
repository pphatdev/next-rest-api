import * as React from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Container } from '@/components/container';
import { StarBoard } from '@/components/stars';
import Link from "next/link"

export default function Login() {

    return(
        <StarBoard>
            <div className="absolute -z-10 inset-0 overflow-hidden opacity-20">
                <div className="jumbo absolute -inset-[10px] opacity-50"></div>
            </div>
            <Container>
                <div className='h-screen flex items-center justify-center font-poppins text-white'>
                <Card className="max-w-sm px-3 py-6 w-full bg-white/5 backdrop-blur-[2px] border-0">
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
                                    <Input className="bg-transparent text-slate-200 focus-visible:ring-slate-800 focus-visible:outline-none" id="email" placeholder="info.name@domain.com"/>
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label className="text-white" htmlFor="password">Password</Label>
                                    <Input type="password" className="bg-transparent text-slate-200 focus-visible:ring-slate-800 focus-visible:outline-none" id="password" placeholder="Password"/>
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex gap-2 justify-end mt-2">
                        <Link href="/" className="bg-white py-2.5 px-5 inline-flex items-center justify-center focus:outline-none whitespace-nowrap rounded-md text-sm font-medium text-slate-950">Login</Link>
                    </CardFooter>
                </Card>
                </div>
            </Container>
        </StarBoard>
    )
}