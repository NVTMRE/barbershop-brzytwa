import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import Image from "next/image";

type Props = {
    photos: string[]
}

export default function PhotoGallery({photos}: Props) {
    return (
        <Carousel className="w-fit max-w-md mt-4" opts={{
            loop: true,
        }}>
            <CarouselContent className={'items-center'}>
                {photos.map((photo, index) => (
                    <CarouselItem key={index} className={'border w-fit border-none h-fit'}>
                        <Image src={photo}
                               alt={`${photo}-${index}`}
                               width={0}
                               height={0}
                               sizes="100vw"
                               className={'w-full rounded-xl border-[0.15rem] border-foreground'}
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className={'bg-transparent hover:bg-foreground hover:text-white'}/>
            <CarouselNext className={'bg-transparent hover:bg-foreground hover:text-white'}/>
        </Carousel>
    )
}