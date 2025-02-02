import {Card, CardContent, CardHeader} from "@/components/ui/card";
import * as React from "react";
import {ReviewType} from "@/types/reviews";
import {ServiceType} from "@/types/service";
import {EmployeeType} from "@/types/employee";

type Props = {
    review: ReviewType
    employee?: EmployeeType
    service?: ServiceType
}

export default function RateCard({review, service, employee}: Props) {
    const Star = () => <div>⭐</div>

    const stars = [];
    for (let i = 0; i < review.rank; i++) {
        stars.push(<Star key={i} />);
    }

    return (
        <Card className={'w-fit md:w-full'}>
            {/*DESKTOP*/}
            <CardContent className={'hidden md:block'}>
                <CardHeader className={'mx-0 px-0 pb-2 mb-2 flex flex-row justify-between items-center'}>
                    <div className={'flex gap-2 items-center'}>{stars}</div>
                    <p className={'text-muted-foreground items-center'}>{review.first_name} {review.last_name}</p>
                </CardHeader>
                <p>{review.review}</p>
                <p className={'font-medium'}>{service?.name}</p>
                <p className={'text-sm'}>Pracownik: {employee?.name}</p>
            </CardContent>
            {/*MOBILE*/}
            <CardContent className={'flex flex-col text-center md:hidden'}>
                <CardHeader className={'w-fit flex flex-col justify-center items-center'}>
                    <p className={'text-muted-foreground items-center'}>{review.first_name} {review.last_name}</p>
                    <div className={'flex gap-2 items-center'}>{stars}</div>
                    <p>{review.review}</p>
                </CardHeader>
                <p className={'font-medium'}>{service?.name}</p>
                <p className={'text-sm'}>Pracownik: {employee?.name}</p>
            </CardContent>
        </Card>
    )
}