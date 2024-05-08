import { Container } from '@/components/container';
import { Header } from './components/header';
import { Sidebar } from './components/sidebar';
import { playlists } from './data/playlists';

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
                    <Sidebar playlists={playlists} className="hidden lg:block" />
                    <div className="col-span-3 lg:col-span-4 lg:border-l p-5">
                        <Tabs defaultValue="account" className="w-fit">
                            <TabsList className="flex gap-2">
                                <TabsTrigger value="account">Expore</TabsTrigger>
                                <TabsTrigger value="music">Music</TabsTrigger>
                                <TabsTrigger value="animation">Animations</TabsTrigger>
                            </TabsList>
                            <TabsContent value="account">
                                {/* <Card>
                                    <CardHeader>
                                        <CardTitle>Account</CardTitle>
                                        <CardDescription>
                                        Make changes to your account here. Click save when you're done.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-2">
                                        <div className="space-y-1">
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" defaultValue="Pedro Duarte" />
                                        </div>
                                        <div className="space-y-1">
                                        <Label htmlFor="username">Username</Label>
                                        <Input id="username" defaultValue="@peduarte" />
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button>Save changes</Button>
                                    </CardFooter>
                                </Card> */}
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </Container>
        </>
    );
}
