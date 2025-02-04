"use client"

import {FaFacebook, FaInstagram} from "react-icons/fa";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {useIsScrolled} from "@/hooks/is-scrolled";
import {cn} from "@/lib/utils";
import {NavItemsType} from "@/types/nav-items";
import {useSplittedNavItems} from "@/hooks/splitted-nav-items";
import Image from "next/image";
import {MenuIcon, XIcon} from "lucide-react";
import {useState} from "react";
import {NavItems} from "@/config/nav-items";

export default function Navbar() {
    const isScrolled = useIsScrolled()
    const {firstPart, secondPart} = useSplittedNavItems()
    const [expanded, setExpanded] = useState(false);

    const renderNavItems = (items: NavItemsType) => items.map(item => (
        <Link href={item.href} key={item.name}>
            <p>{item.name}</p>
        </Link>
    ))

    return (
        <div
            className={cn(
                'fixed top-0 w-screen z-50 transition-all text-white shadow-2xl bg-black/15',
                isScrolled && 'bg-background text-black shadow-md'
            )}
        >
            {/*DESKTOP NAVBAR*/}
            <div className={'justify-between items-center px-5 py-4 hidden md:flex'}>
                <div className={'flex gap-2'}>
                    <Link href="https://www.facebook.com/BrzytwaBarbershop/" target={'_blank'}>
                        <FaFacebook size={23} className={cn('transition-all', !isScrolled && 'fill-white')}/>
                    </Link>
                    <Link href="https://www.instagram.com/brzytwa.barbershop/" target={'_blank'}>
                        <FaInstagram size={23} className={cn('transition-all', !isScrolled && 'fill-white')}/>
                    </Link>
                </div>
                <div
                    className={'absolute left-1/2 transform -translate-x-[45%] flex gap-2 items-center justify-center'}>
                    {renderNavItems(firstPart)}
                    <Link href={'#Hero'}>
                        <Image src={'/logo.png'} alt={'logo'} height={50} width={50} className={'mx-2'}/>
                    </Link>
                    {renderNavItems(secondPart)}
                </div>
                <Link href={'https://barbershopbrzytwa.booksy.com'} className={'relative'}>
                    <Button
                        variant={'outline'}
                        className={cn(
                            'bg-transparent border-[0.15rem] rounded-radius h-8 px-3 text-[0.75rem] transition-all hover:bg-background',
                            isScrolled && 'border-black hover:bg-foreground hover:text-white'
                        )}
                    >
                        <p>UMÓW SIĘ</p>
                    </Button>
                </Link>
            </div>

            {/*MOBILE NAVBAR*/}
            <div
                className={cn(
                    'h-[7vh] flex flex-col md:hidden transition-all',
                    isScrolled && 'bg-background text-black shadow-md', expanded && 'bg-background text-black h-screen'
                )}
            >
                <div className={cn('h-[7vh] px-5 flex justify-between items-center', expanded && 'border-b border-foreground')}>
                    <Link href={'#Hero'}>
                        <Image src={'/logo.png'} alt={'logo'} height={50} width={50}/>
                    </Link>
                    {
                        !expanded
                            ? <MenuIcon className={cn(isScrolled && 'text-black')} onClick={() => setExpanded(true)}/>
                            : <XIcon className={cn(isScrolled && 'text-black')} onClick={() => setExpanded(false)}/>
                    }
                </div>
                <div className={cn('hidden flex-col items-center justify-center', expanded && 'flex')}>
                    <Link href={'#Hero'}>
                        <Button
                            variant={'outline'}
                            className={'bg-background h-[7vh] px-5 flex justify-start w-screen border-[0px] border-b-[1px] border-foreground rounded-none hover:text-white'}
                            onClick={() => setExpanded(false)}
                        >
                            Home
                        </Button>
                    </Link>
                    {NavItems.map(item => (
                        <Link href={item.href} key={item.name}>
                            <Button
                                variant={'outline'}
                                className={'bg-background h-[7vh] px-5 flex justify-start w-screen border-[0px] border-b-[1px] border-foreground rounded-none hover:text-white'}
                                onClick={() => setExpanded(false)}
                            >
                                {item.name}
                            </Button>
                        </Link>
                    ))}
                </div>
            </div>
        </div>

    )
}