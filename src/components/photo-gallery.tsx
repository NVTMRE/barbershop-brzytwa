"use client"

import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

type Props = {
    photos: string[]
}

export default function PhotoGallery({photos}: Props) {
    return (
        <Carousel className="w-fit max-w-md mt-4"
                  opts={{loop: true}}
                  plugins={[
                      Autoplay({
                          delay: 5000,
                      })
                  ]}
        >
            <CarouselContent className={'items-center'}>
                {photos.map((photo, index) => (
                    <CarouselItem key={index} className={'border w-fit border-none h-fit flex justify-center items-center'}>
                        <Image src={photo}
                               alt={`${photo}-${index}`}
                               width={0}
                               height={0}
                               sizes="100vw"
                               className={'w-[75vw] md:w-full rounded-xl border-[0.15rem] border-foreground'}
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className={'bg-transparent border-foreground hover:bg-foreground hover:text-white hidden md:flex'}/>
            <CarouselNext className={'bg-transparent border-foreground hover:bg-foreground hover:text-white hidden md:flex'}/>
        </Carousel>
    )
}