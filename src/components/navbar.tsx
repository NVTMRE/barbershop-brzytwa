"use client"

import Link from "next/link"
import {FaFacebook, FaInstagram} from "react-icons/fa";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import {Button} from "./ui/button";
import {useEffect, useState} from "react";
import {cn} from "@/lib/utils";
import {NavItems} from "@/module/nav-items";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20 ? true : false);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={cn(
            isScrolled ? 'bg-background text-foreground' : 'bg-transparent text-white',
            'z-40 fixed top-0 w-[100vw] py-2 px-8 flex justify-between items-center transition-colors'
        )}>
            <div className={'flex gap-3 transition-colors'}>
                <Link href={'https://www.facebook.com/BrzytwaBarbershop/'}>
                    <FaFacebook size={23}/>
                </Link>
                <Link href={'https://www.instagram.com/brzytwa.barbershop/'}>
                    <FaInstagram size={23}/>
                </Link>
            </div>
            <NavigationMenu>
                <NavigationMenuList className={'flex items-center justify-center gap-3'}>
                    {NavItems.map((item, index) => (
                        <NavigationMenuItem key={index}>
                            <Link href={item.href}>
                                    {!item.img ?
                                        item.name
                                        : <Image src={item.img} alt={item.name} height={65} width={65}/>}
                            </Link>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
            <Link href={'https://barbershopbrzytwa.booksy.com'} legacyBehavior>
                <a target={'_blank'}>
                    <Button
                        variant={'outline'}
                        className={'border-foreground bg-transparent border-[0.15rem] rounded-radius h-8 px-3 text-[0.75rem] text-foreground absolute right-8 top-6 hover:text-white'}
                    >
                        <p>UMÓW SIĘ</p>
                    </Button>
                </a>
            </Link>
        </div>
    )
}