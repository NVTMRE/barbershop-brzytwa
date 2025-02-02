import Image from "next/image";
import {Button} from "@/components/ui/button";
import {MailIcon, PhoneCallIcon} from "lucide-react";

export default function TraningSec() {
    const renderMobile = () => (
        <section id={"Training"}
                 className={'h-max px-12 py-24 bg-foreground flex flex-col gap-8 items-center text-foreground text-white text-center md:hidden'}>
            <p className={'pb-4 px-12 text-3xl font-bold m-0 border-b md:border-b-0 border-primary'}>SZKOLENIA</p>
            <div className={'flex flex-col justify-center items-center gap-8 border-b border-primary pb-12'}>
                <Image src={'/assets/employees/cezar.jpeg'} alt={'Zdjęcie ze szkoleń'} width={300} height={300}
                       className={'rounded-xl'}/>
                <div className={'flex flex-col gap-8'}>
                    <h1 className={'font-black text-center text-2xl'}>KURSY BARBERSKIE - CHORZÓW</h1>
                    <p>
                        Szkolenia Barberskie w Naszym salonie są prowadzone przez doświadczonego Barbera Cesara,
                        który
                        przez 8 lat był szkoleniowcem w jednym z najlepszych barbershopów w Anglii.
                    </p>
                    <ul className={'list-disc text-left'}>
                        <li>Chcesz zacząć swoją przygodę w fryzjerstwie męskim ?</li>
                        <li>Chcesz poznać najnowsze trendy ?</li>
                        <li>Jesteś początkującym berberem?</li>
                        <li>Jesteś doświadczonym barterem i chcesz rozwinąć swoje umiejętności na wyższy level?</li>
                    </ul>
                </div>
            </div>
            <div className={'flex flex-col justify-center items-center gap-8 border-b border-primary pb-12 pt-6'}>
                <Image src={'/assets/IMG_0102.jpg'} alt={'Zdjęcie ze szkoleń'} width={300} height={300}
                       className={'rounded-xl'}/>
                <div className={'flex flex-col gap-8'}>
                    <p>
                        Zapraszamy do zapoznania się z Naszą ofertą szkoleniową skierowaną zarówno do początkujących
                        jak również doświadczonych Barberów.
                        Kursy prowadzone są indywidualnie lub w małych 2-3 osobowych grupach co pozwala na max
                        przekazanie wiedzy kursantom.<br/>
                        Do szkoleń podchodzimy indywidualnie dobierając tematykę do Twoich potrzeb.
                    </p>
                    <ul className={'list-disc text-left'}>
                        <li>Indywidualne kursy od zera do barbera</li>
                        <li>Kursy dla zaawansowanych</li>
                        <li>Oferta dla salonów</li>
                    </ul>
                </div>
            </div>
            <div className={'flex flex-col justify-center items-center gap-8 pt-6'}>
                <Image src={'/assets/IMG_0105.jpg'} alt={'Zdjęcie ze szkoleń'} width={300} height={300}
                       className={'rounded-xl'}/>
                <div className={'flex flex-col gap-4'}>
                    <p>
                        Po zakończeniu szkolenia zmienisz się w prawdziwego eksperta w dziedzinie stylizacji męskich
                        fryzur oraz zarostu. <br/>
                        Potrzebujesz więcej informacji ? <br/>
                        Zadzwoń lub napisz do Nas:
                    </p>
                    <div className={'flex justify-center items-center gap-4'}>
                        <a href={"tel:+48501343338"}>
                            <Button
                                variant={'outline'}
                                className={'border-white bg-transparent border-[0.15rem] rounded-radius h-10 px-6 text-[0.75rem] hover:bg-white'}
                            >
                                <p>501343338</p>
                                <PhoneCallIcon/>
                            </Button>
                        </a>
                        <a href={"mailto:barbershop.brzytwa@gmail.com"}>
                            <Button
                                variant={'outline'}
                                className={'border-white bg-transparent border-[0.15rem] rounded-radius h-10 px-6 text-[0.75rem] hover:bg-white'}
                            >
                                <p>Napisz do nas</p>
                                <MailIcon/>
                            </Button>
                        </a>
                    </div>
                    <ul className={'list-disc text-left pt-8'}>
                        <li>Jesteśmy instytucją szkoleniową wpisaną do RIS</li>
                        <li>Możliwość finansowania z środków Urzędu Pracy</li>
                    </ul>
                </div>
            </div>
        </section>
    )

    const renderDesktop = () => (
        <section id={"Training"}
                 className={'hidden md:flex flex-col py-24 bg-foreground h-full text-white items-center text-left'}>
            <p className={'px-12 text-3xl font-bold mb-12'}>SZKOLENIA</p>
            <div className={'grid grid-cols-2 px-28'}>
                <div className={'flex justify-center items-center py-8 border-r border-primary'}>
                    <Image src={'/assets/employees/cezar.jpeg'} alt={'Zdjęcie ze szkoleń'} width={300} height={300}
                           className={'rounded-xl'}/>
                </div>
                <div className={'px-36 flex flex-col gap-8 justify-center'}>
                    <h1 className={'font-black text-2xl'}>KURSY BARBERSKIE - CHORZÓW</h1>
                    <p>
                        Szkolenia Barberskie w Naszym salonie są prowadzone przez doświadczonego Barbera Cesara,
                        który
                        przez 8 lat był szkoleniowcem w jednym z najlepszych barbershopów w Anglii.
                    </p>
                    <ul className={'list-disc'}>
                        <li>Chcesz zacząć swoją przygodę w fryzjerstwie męskim ?</li>
                        <li>Chcesz poznać najnowsze trendy ?</li>
                        <li>Jesteś początkującym berberem?</li>
                        <li>Jesteś doświadczonym barterem i chcesz rozwinąć swoje umiejętności na wyższy level?</li>
                    </ul>
                </div>
            </div>
            <div className={'grid grid-cols-2 px-28'}>
                <div className={'px-36 flex flex-col gap-8 justify-center py-8 border-r border-primary'}>
                    <p>
                        Zapraszamy do zapoznania się z Naszą ofertą szkoleniową skierowaną zarówno do początkujących
                        jak również doświadczonych Barberów.
                        Kursy prowadzone są indywidualnie lub w małych 2-3 osobowych grupach co pozwala na max
                        przekazanie wiedzy kursantom.<br/>
                        Do szkoleń podchodzimy indywidualnie dobierając tematykę do Twoich potrzeb.
                    </p>
                    <ul className={'list-disc text-left'}>
                        <li>Indywidualne kursy od zera do barbera</li>
                        <li>Kursy dla zaawansowanych</li>
                        <li>Oferta dla salonów</li>
                    </ul>
                </div>
                <div className={'flex justify-center items-center py-8'}>
                    <Image src={'/assets/IMG_0102.jpg'} alt={'Zdjęcie ze szkoleń'} width={300} height={300}
                           className={'rounded-xl'}/>
                </div>
            </div>
            <div className={'grid grid-cols-2 px-28'}>
                <div className={'flex justify-center items-center py-8 border-r border-primary'}>
                    <Image src={'/assets/IMG_0105.jpg'} alt={'Zdjęcie ze szkoleń'} width={300} height={300}
                           className={'rounded-xl'}/>
                </div>
                <div className={'px-36 gap-2 flex flex-col justify-center'}>
                    <p>
                        Po zakończeniu szkolenia zmienisz się w prawdziwego eksperta w dziedzinie stylizacji męskich
                        fryzur oraz zarostu. <br/>
                        Potrzebujesz więcej informacji ? <br/>
                        Zadzwoń lub napisz do Nas:
                    </p>
                    <div className={'flex items-center gap-4'}>
                        <a href={"tel:+48501343338"}>
                            <Button
                                variant={'outline'}
                                className={'border-white bg-transparent border-[0.15rem] rounded-radius h-10 px-6 text-[0.75rem] hover:bg-white'}
                            >
                                <p>501343338</p>
                                <PhoneCallIcon/>
                            </Button>
                        </a>
                        <a href={"mailto:barbershop.brzytwa@gmail.com"}>
                            <Button
                                variant={'outline'}
                                className={'border-white bg-transparent border-[0.15rem] rounded-radius h-10 px-6 text-[0.75rem] hover:bg-white'}
                            >
                                <p>Napisz do nas</p>
                                <MailIcon/>
                            </Button>
                        </a>
                    </div>
                    <ul className={'list-disc text-left pt-8'}>
                        <li>Jesteśmy instytucją szkoleniową wpisaną do RIS</li>
                        <li>Możliwość finansowania z środków Urzędu Pracy</li>
                    </ul>
                </div>
            </div>
        </section>
    )

    return (
        <>
            {renderMobile()}
            {renderDesktop()}
        </>
    )
}