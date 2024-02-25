"use client"

import Link from "next/link"
import {FaFacebook, FaInstagram} from "react-icons/fa";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import {buttonVariants} from "./ui/button";
import {useEffect, useState} from "react";
import {cn} from "@/lib/utils";
import {NavItems} from "@/module/nav-items";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
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
            'z-50  fixed top-0 py-2 px-6 w-full flex justify-between items-center transition-colors gap-x-4'
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
                <NavigationMenuList className="flex items-center gap-2">
                    {NavItems.map((item, index) => (
                        <NavigationMenuItem key={index}>
                            <Link href={item.href}>
                                {item.img ? <Image src={item.img} alt={item.name} width={75} height={75} className={'mx-4'}/> : <p>{item.name}</p>}
                            </Link>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
            <div>
                <Link href={'https://barbershopbrzytwa.booksy.com'} className={cn(buttonVariants({variant: 'outline'}), 'absolute right-5 top-1/3 flex border-black font-black bg-transparent border-[0.15rem] rounded-radius h-8 px-3 text-[0.75rem] text-bold text-black hover:text-white')}>
                    <p>UMÓW SIĘ</p>
                </Link>
            </div>
        </div>
    )
}