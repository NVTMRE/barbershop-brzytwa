import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import * as React from "react";
import {Rate} from "@/types/rate";
import {Employees} from "@/module/employees";
import {Services} from "@/module/services";

type Props = {
    rate: Rate
}

export default function RateCard({rate}: Props) {
    const Star = () => <div>⭐</div>

    const stars = [];
    for (let i = 0; i < rate.stars; i++) {
        stars.push(<Star key={i} />);
    }

    const employee = Employees.find(employee => employee.id === rate.employeeId);
    const service = Services.find(service => service.id === rate.serviceId)

    return (
        <Card>
            <CardContent>
                <CardHeader className={'mx-0 px-0 pb-2 mb-2 flex flex-row justify-between items-center'}>
                    <div className={'flex gap-2 items-center'}>{stars}</div>
                    <p className={'text-muted-foreground items-center'}>{rate.raterName}</p>
                </CardHeader>
                <p className={'font-medium'}>{service?.name}</p>
                <p className={'text-sm'}>Pracownik: {employee?.name}</p>
            </CardContent>
        </Card>
    )
}