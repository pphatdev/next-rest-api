import { Container } from '@/components/container';
import Header from '@/components/header';

export default function Admin() {
    return (
        <>
            <Header></Header>
            <Container>
                <div className="absolute -z-10 inset-0 overflow-hidden">
                    <div className="jumbo absolute -inset-[10px] opacity-50"></div>
                </div>
            </Container>
        </>
    );
}
