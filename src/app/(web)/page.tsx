"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger, } from "@/components/elements/tabs"
import WebLayout from './components/layout';
import { HomeHero } from "./utils/hero";
import { ViewCards } from "./components/card";
import { useMemo, useState } from "react";
import { videos } from './data/videos';

export default function Home()
{
    const [loading, setLoading] = useState<boolean>(false);
    const data = useMemo(() => videos, [videos]);

    return (
        <WebLayout>
            <HomeHero></HomeHero>
            <Tabs defaultValue="battle-through-the-heavens" className="w-fit mt-10">
                <TabsList className="flex justify-start flex-wrap gap-2">
                    <TabsTrigger value="battle-through-the-heavens">Battle Through the Heavens</TabsTrigger>
                    <TabsTrigger value="a-record-of-mortal's-journey-to-imortality">A Record of Mortal's Journey to Immortality</TabsTrigger>
                    <TabsTrigger value="douluo-dalu">Douluo Dalu</TabsTrigger>
                    <TabsTrigger value="the-journey-of-wugeng">The Journey of Wugeng</TabsTrigger>
                    <TabsTrigger value="white-snake">White Snake</TabsTrigger>
                </TabsList>
                <TabsContent value="battle-through-the-heavens">
                    <ViewCards data={data} isLoading={loading}></ViewCards>
                </TabsContent>
            </Tabs>
        </WebLayout>
    );
}
