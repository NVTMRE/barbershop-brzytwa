import {ServiceType} from "@/types/service";
import {
    Dialog,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {
    Drawer, DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "./ui/drawer";

type Props = {
    item: ServiceType
}

export default function ServiceDialog ({item}:Props) {
    const renderDialog = () => (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant={'outline'}
                    className={'hidden md:block border-white bg-transparent border-[0.15rem] rounded-radius h-10 px-6 text-[0.75rem] hover:foreground hover:bg-background'}
                >
                    {item.name.toUpperCase()}
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader className={'pt-5 pb-2'}>
                    <DialogTitle className={'flex justify-between'}>
                        <p>{item.name.toUpperCase()}</p>
                        <p>{item.price} zł</p>
                    </DialogTitle>
                </DialogHeader>
                {item.description && <DialogDescription className={'text-sm'}>{item.description}</DialogDescription>}
                <DialogFooter className={cn('flex flex-end', item.description && 'pt-2')}>
                    <Link href={'https://barbershopbrzytwa.booksy.com'} legacyBehavior>
                        <a target={'_blank'}>
                            <Button
                                variant={'outline'}
                                className={'border-foreground bg-transparent border-[0.15rem] rounded-radius h-10 px-6 text-[0.75rem] hover:text-white'}
                            >
                                <p>UMÓW SIĘ</p>
                            </Button>
                        </a>
                    </Link>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )

    const renderDrawer = () => (
        <Drawer>
            <DrawerTrigger asChild>
                <Button
                    variant={'outline'}
                    className={'block md:hidden border-white bg-transparent border-[0.15rem] rounded-radius h-10 px-6 text-[0.75rem] hover:foreground hover:bg-background'}
                >
                    {item.name.toUpperCase()}
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className={'flex flex-col gap-4'}>
                    <DrawerTitle className={'text-sm'}>
                        <p>{item.name.toUpperCase()}</p>
                        <p>{item.price} zł</p>
                    </DrawerTitle>
                    {item.description && <DrawerDescription>{item.description}</DrawerDescription>}
                </DrawerHeader>
                <DrawerFooter>
                    <Link href={'https://barbershopbrzytwa.booksy.com'} legacyBehavior>
                        <a target={'_blank'}>
                            <Button className={'w-full'}>UMÓW SIĘ</Button>
                        </a>
                    </Link>
                    <DrawerClose asChild>
                        <Button variant="outline">Cofnij</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>

    )

    return (
        <>
            {renderDialog()}
            {renderDrawer()}
        </>
    )
}