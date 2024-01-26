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
            'fixed top-0 w-[100vw] py-2 px-8 flex justify-between items-center transition-colors'
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
                    <NavigationMenuItem>
                        <Link href={'#About'}>
                            <p className={'hover:text-black transition-colors'}>O nas</p>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href={'#Offer'}>
                            <p className={'hover:text-black transition-colors'}>Oferta</p>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href={'#Team'}>
                            <p className={'hover:text-black transition-colors'}>Zespół</p>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href={'#Hero'}>
                            <Image src={'/logo.png'} alt={"Logo"} width={65} height={65}/>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href={'#Training'}>
                            <p className={'hover:text-black transition-colors'}>Szkolenia</p>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href={'#Gallery'}>
                            <p className={'hover:text-black transition-colors'}>Galeria</p>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href={'#Contact'}>
                            <p className={'hover:text-black transition-colors'}>Kontakt</p>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <Link href={'https://barbershopbrzytwa.booksy.com'}>
                <Button
                    variant={'outline'}
                    className={'border-black bg-transparent border-[0.15rem] rounded-radius h-8 px-3 text-[0.75rem] text-black'}
                >
                    <p>UMÓW SIĘ</p>
                </Button>
            </Link>
        </div>
    )
}