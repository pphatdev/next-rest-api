import { AspectRatio } from "@/components/elements/aspect-ratio"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/elements/breadcrumb"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/elements/carousel"
import Image from "next/image"
import { Button } from "@/components/elements/button"

const trending: Array<{
    id: string  | number,
    name: string,
    image: string,
}> = [
    {
        id: 2,
        name: "battle through the heavens",
        image: "https://static.wikia.nocookie.net/battle-through-the-heavens/images/d/d7/XiaoYanBoneWing.png"
    },
    {
        id: 3,
        name: "battle through the heavens",
        image: "https://m.media-amazon.com/images/M/MV5BZTRlMDNlNWItYTU3ZC00NjMyLWIyMjMtM2FiZDk0MjI1MmVhXkEyXkFqcGdeQXVyNTY4MjkyOTk@._V1_.jpg"
    },
    {
        id: 4,
        name: "battle through the heavens",
        image: "https://static.wikia.nocookie.net/battle-through-the-heavens/images/3/33/Cai_Lin_Wife_of_Xiao_Yan.jpg/revision/latest/smart/width/400/height/225?cb=20230916130353"
    },
    {
        id: 5,
        name: "Attack on Titan",
        image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/10/Temp-1400x700(14)-1.png"
    },
]

export const HomeHero = () => {
    return (
        <>
            <AspectRatio ratio={16 / 8} className="bg-muted rounded-xl mt-5 overflow-hidden ring-1 ring-primary-foreground relative">
                <Image
                    src="https://m.media-amazon.com/images/M/MV5BMmY0NGZjMDgtZTVjOC00ZTIzLWE4OTEtNzMyMTkzOGI2NjExXkEyXkFqcGdeQXVyMTY4MzA3MjE1._V1_.jpg"
                    alt="Photo by Drew Beamer"
                    fill
                    className="object-cover absolute inset-0"
                />
                <div className="absolute font-poppins text-white text-left z-10 bg-gradient-to-r from-black/90 to-primary/0 inset-0 p-6 flex items-center flex-col">
                    <p className="w-full font-medium">Home</p>
                    <div className="w-full mt-16">
                        <Breadcrumb className=" font-medium">
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink className="hover:text-primary font-medium" href="/">Magic</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className="text-white font-medium">Adventure</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                        <h1 className="text-5xl py-2 leading-tight font-bold text-white">Battle Through the Heavens</h1>
                        <p className="text-slate-400 text-sm font-medium">Weekend specials on budge rentals</p>

                        <div className="mt-5">
                            <Button className="rounded-full">Watch Now</Button>
                        </div>
                    </div>
                </div>
                <div className="absolute z-50 bottom-5 inset-x-20">
                    <Carousel
                        opts={{ align: "start", }}
                        className="w-full">
                        <CarouselContent>
                            {Array.from(trending).map((item, index) => (
                                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                                    <div className="p-1">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            width={200}
                                            height={100}
                                            className="rounded-md flex-shrink-0 h-28 w-52 object-cover"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="bg-primary-foreground/10"/>
                        <CarouselNext className="bg-primary-foreground/10" />
                    </Carousel>

                </div>
            </AspectRatio>
        </>
    )
}