import { Container } from '@/components/container';
import Header from '@/components/header';

export default function Home() {
    return (
        <>
            <Header></Header>
            <Container>
                {/* <div className="absolute -z-10 inset-0 overflow-hidden">
                    <div className="jumbo absolute -inset-[10px] opacity-50"></div>
                </div> */}
                <div className="bg-transparent h-[calc(100vh_-10rem)] flex flex-col items-center justify-center">
                    <h1 className="text-2xl font-bold text-center uppercase dark:text-white md:text-5xl">Wel<span className="text-primary">come!!</span></h1>
                    <p className="max-w-2xl py-4 mx-auto my-5 text-sm font-normal text-center lg:max-w-xl md:text-lg dark:text-primary-600 text-slate-600 font-body">Coming Soon!</p>
                </div>
            </Container>
        </>
    );
}
