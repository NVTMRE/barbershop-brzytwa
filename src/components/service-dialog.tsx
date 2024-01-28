import {Service} from "@/types/service";
import {
    Dialog,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {Separator} from "@/components/ui/separator";
import Link from "next/link";

type Props = {
    item: Service
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
                <DialogHeader className={'px-3 py-5'}>
                    <DialogTitle className={'flex justify-between pb-4'}>
                        <p>{item.name.toUpperCase()}</p>
                        {!item.customCost ?
                            <p className={'text-muted-foreground'}>{item.cost} zł</p>
                            : <p><p className={'text-muted-foreground'}>{item.customCost}</p></p>
                        }
                    </DialogTitle>
                    {item.desc && <DialogDescription>{item.desc}</DialogDescription>}
                </DialogHeader>
                <DialogFooter className={'flex flex-end'}>
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