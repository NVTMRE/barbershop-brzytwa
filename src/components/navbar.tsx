"use client"

import {FaFacebook, FaInstagram} from "react-icons/fa";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {useIsScrolled} from "@/hooks/is-scrolled";
import {cn} from "@/lib/utils";
import {NavItemsType} from "@/types/nav-items";
import {useSplittedNavItems} from "@/hooks/splitted-nav-items";
import Image from "next/image";

export default function Navbar() {
    const isScrolled = useIsScrolled()
    const {firstPart, secondPart} = useSplittedNavItems()

    const renderNavItems = (items: NavItemsType) => items.map(item => (
        <Link href={item.href} key={item.name}>
            <p>{item.name}</p>
        </Link>
    ))

    return (
        <div className={cn('fixed top-0 w-screen px-5 py-4 z-10 flex justify-between items-center transition-colors text-white shadow-2xl bg-black/15', isScrolled && 'bg-white text-black shadow-md')}>
            <div className={'flex gap-2'}>
                <Link href="https://www.facebook.com/BrzytwaBarbershop/" target={'_blank'}>
                    <FaFacebook size={23} className={cn('transition-all', !isScrolled && 'fill-white')}/>
                </Link>
                <Link href="https://www.instagram.com/brzytwa.barbershop/" target={'_blank'}>
                    <FaInstagram size={23} className={cn('transition-all', !isScrolled && 'fill-white')}/>
                </Link>
            </div>
            <div className={'absolute left-1/2 transform -translate-x-[45%] flex gap-2 items-center justify-center'}>
                {renderNavItems(firstPart)}
                <Link href={'#Hero'}>
                    <Image src={'/logo.png'} alt={'logo'} height={50} width={50} className={'mx-2'}/>
                </Link>
                {renderNavItems(secondPart)}
            </div>
            <Link href={'https://barbershopbrzytwa.booksy.com'} className={'relative'}>
                <Button
                    variant={'outline'}
                    className={cn('bg-transparent border-[0.15rem] rounded-radius h-8 px-3 text-[0.75rem] transition-all', isScrolled && 'border-black')}
                >
                    <p>UMÓW SIĘ</p>
                </Button>
            </Link>
        </div>
    )
}