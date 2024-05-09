import { Container } from '@/components/container';
import { Header } from './components/header';
import { Sidebar } from './components/sidebar';
import { menu } from './data/playlists';

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/elements/tabs"


export default function Home() {
    return (
        <>
            <Header/>
            <Container>
                <div className="grid lg:grid-cols-5">
                    <Sidebar playlists={menu} className="hidden lg:block" />
                    <div className="col-span-3 lg:col-span-4 lg:border-l p-5">
                        <Tabs defaultValue="account" className="w-fit">
                            <TabsList className="flex gap-2">
                                <TabsTrigger value="account">Expore</TabsTrigger>
                                <TabsTrigger value="music">Music</TabsTrigger>
                                <TabsTrigger value="animation">Animations</TabsTrigger>
                            </TabsList>
                            <TabsContent value="account">
                                
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </Container>
        </>
    );
}
