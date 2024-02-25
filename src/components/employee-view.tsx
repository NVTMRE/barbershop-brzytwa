import Link from "next/link";
import {Employee} from "@/types/employee";

type Props = {
    employee: Employee
}

export default function EmployeeView({employee}: Props) {
    return (
        <Link href={`https://booksy.com/pl-pl/100880_barbershop-brzytwa_barber-shop_12311_chorzow/staffer/${employee.id}#ba_s=dl_1`} legacyBehavior>
            <a target={'_blank'}>
                <div
                    className={`cursor-pointer flex flex-wrap justify-center items-center text-center border-foreground grayscale hover:grayscale-0 bg-center bg-cover border-[0.15rem] rounded-radius h-96 w-60 hover:bg-foreground`}
                    style={{ backgroundImage: `url(${employee.img})` }}
                >
                    <p className={'size font-black text-white text-4xl'}>{employee.name}</p>
                </div>
            </a>
        </Link>
    )
}