import * as React from "react"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {Rates} from "@/module/rates";
import RateCard from "@/components/rate-card";

export function RatesView() {
    return (
        <Carousel className="w-full max-w-md">
            <CarouselContent>
                {Rates.map((rate, index) => (
                    <CarouselItem key={index}>
                        <RateCard rate={rate}/>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className={'bg-transparent hover:bg-background'}/>
            <CarouselNext className={'bg-transparent hover:bg-background'}/>
        </Carousel>
    )
}
