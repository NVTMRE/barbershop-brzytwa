import * as React from "react"

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

type Props = {
    reviews?: ReviewsType
    services?: ServicesType
    employees?: EmployeesType
}

export function RatesView({reviews, services, employees}: Props) {
    return (
        <Carousel className="w-fit max-w-md" opts={{
            loop: true,
        }}>
            <CarouselContent>
                {reviews?.map((review, index) => (
                    <CarouselItem key={index}>
                        <RateCard
                            review={review}
                            employee={employees?.find(item => item.id === review.employee_id)}
                            service={services?.find(item => item.id === review.service_id)}
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className={'bg-transparent hover:bg-background'}/>
            <CarouselNext className={'bg-transparent hover:bg-background'}/>
        </Carousel>
    )
}