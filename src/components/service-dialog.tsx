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

type Props = {
    item: ServiceType
}

export default function ServiceDialog ({item}:Props) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant={'outline'}
                    className={'border-white bg-transparent border-[0.15rem] rounded-radius h-10 px-6 text-[0.75rem] hover:foreground hover:bg-background'}
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
}