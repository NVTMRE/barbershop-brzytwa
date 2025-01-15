import Link from "next/link";
import {EmployeeType} from "@/types/employee";

type Props = {
    employee: EmployeeType
}

export default function EmployeeView({employee}: Props) {
    return (
        <Link href={`https://booksy.com/pl-pl/100880_barbershop-brzytwa_barber-shop_12311_chorzow/staffer/${employee.id}`} legacyBehavior>
            <a target={'_blank'}>
                <div
                    className={`cursor-pointer flex justify-center items-center text-center border-foreground grayscale hover:grayscale-0 bg-center bg-cover rounded-xl border-[0.15rem] h-96 w-60`}
                    style={{ backgroundImage: `url("/assets/employees/${employee.img}")` }}
                >
                    <p className={'size font-black text-white text-4xl'}>{employee.name}</p>
                </div>
            </a>
        </Link>
    )
}