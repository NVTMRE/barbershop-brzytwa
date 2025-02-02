"use client"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import RateCard from "@/components/rate-card";
import {ReviewsType} from "@/types/reviews";
import {ServicesType} from "@/types/service";
import {EmployeesType} from "@/types/employee";
import Autoplay from "embla-carousel-autoplay";

type Props = {
    reviews?: ReviewsType
    services?: ServicesType
    employees?: EmployeesType
}

export function RatesView({reviews, services, employees}: Props) {
    return (
        <Carousel className="w-screen md:w-fit"
                  opts={{loop: true}}
                  plugins={[
                      Autoplay({
                          delay: 5000,
                      })
                  ]}
        >
            <CarouselContent>
                {reviews?.map((review, index) => (
                    <CarouselItem key={index} className={'md:w-[8vw] flex justify-center items-center'}>
                        <RateCard
                            review={review}
                            employee={employees?.find(item => item.id === review.employee_id)}
                            service={services?.find(item => item.id === review.service_id)}
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className={'bg-transparent hover:bg-background hidden md:flex'}/>
            <CarouselNext className={'bg-transparent hover:bg-background hidden md:flex'}/>
        </Carousel>
    )
}