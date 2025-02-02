import {MapPin, PhoneCallIcon} from "lucide-react";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import Link from "next/link";

export default function Footer() {
    return (
        <div id={'Footer'} className={'h-fit flex flex-col'}>
            <div className={'flex flex-col gap-8 justify-center md:grid grid-cols-3 md:px-48 py-12 md:py-8 items-center'}>
                <div className={'border-b md:border-b-0 md:border-r pb-8 md:pb-0 border-primary flex flex-col md:flex-row gap-3 justify-center items-center'}>
                    <MapPin size={24}/>
                    <p>3 Maja 56, 41-500, Chorzów</p>
                </div>
                <div className={'border-b md:border-b-0 md:border-r pb-8 md:pb-0 border-primary flex flex-col md:flex-row gap-3 justify-center items-center'}>
                    <PhoneCallIcon size={24}/>
                    <a href={'tel:+48501343338'}>+48 501 343 338</a>
                </div>
                <div className={'flex flex-col md:flex-row justify-center items-center'}>
                    <Image src={'/assets/booksy_icon.png'} alt={'Booksy icon'} height={50} width={50}/>
                    <Link href={'https://barbershopbrzytwa.booksy.com'} className={'relative'}>
                        <Button
                            variant={'outline'}
                            className={cn('bg-transparent border-[0.15rem] rounded-radius h-8 px-3 text-[0.75rem] transition-all border-black hover:text-white')}
                        >
                            <p>UMÓW SIĘ</p>
                        </Button>
                    </Link>
                </div>
            </div>
            <div className={'flex flex-col md:flex-row justify-center md:justify-between items-center bg-foreground text-[0.75rem] text-muted py-3 px-8'}>
                <p>Wszelkie prawa zastrzerzone &copy; Barbershop Brzytwa 2025</p>
                <p>Wykonanie: <a href={'https://nvtmre.com'}>NVTMRE</a></p>
            </div>
        </div>
    )
}