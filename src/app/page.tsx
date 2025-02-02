import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {RatesView} from "@/components/rates-view";
import {getBooksyData} from "@/app/actions";
import ServiceDialog from "@/components/service-dialog";
import EmployeeView from "@/components/employee-view";
import PhotoGallery from "@/components/photo-gallery";
import TraningSec from "@/components/traning-sec";

export const revalidate = 86400

export default async function Home() {
    const {data} = await getBooksyData()

  return (
      <main>
          <section id={'Hero'}
                   className="relative h-[100vh] w-full bg-cover bg-[url('/assets/bg.jpg')] text-center text-white grayscale">
              <div className="absolute inset-0 bg-black/55 z-0"></div>
              <div className="relative h-screen z-10 flex flex-col gap-5 justify-center items-center">
                  <p className={'text-6xl font-black shadow mx-[50vw]'}>Witaj w Barbershop Brzytwa</p>
                  <Link href={'https://barbershopbrzytwa.booksy.com'} legacyBehavior>
                      <a target={'_blank'}>
                          <Button
                              variant={'outline'}
                              className={'border-white bg-transparent border-[0.15rem] rounded-radius h-12 px-8 hover:bg-white hover:text-primary'}
                          >
                              <p>UMÓW SIĘ</p>
                          </Button>
                      </a>
                  </Link>
              </div>
          </section>
          <section id={'About'}
                   className="min-h-[50vh] h-max px-[5vw] py-12 bg-background flex flex-col gap-8 md:grid grid-cols-2 grid-rows-1 justify-center items-center">
              <div
                  className='h-full flex justify-center items-center border-b pb-4 px-12 md:p-0 md:border-b-0 md:border-r border-primary'>
                  <p className={'text-4xl text-center font-bold m-0'}>O NAS</p>
              </div>
              <div className='flex justify-center items-center px-8 md:px-24 text-center md:text-left'>
                  <p className="text-xl">
                      Witaj w Brzytwie, miejscu, gdzie tradycja spotyka się z nowoczesnością, a elegancja z pasją do
                      sztuki klasycznego fryzjerstwa męskiego.
                      Nasza historia sięga 2016 roku a umiejętności są efektem wieloletniego doświadczenia w świecie
                      pielęgnacji męskich włosów i zarostu. Barberzy w Brzytwie to zespół utalentowanych osób,
                      dla których strzyżenie to nie tylko praca ale prawdziwa przyjemność i pasja. Zawsze dążymy do
                      tego,
                      abyś opuszczał Nasz salon nie tylko z doskonałą fryzurą ale także z poczuciem odprężenia i
                      pewności siebie.
                  </p>
              </div>
          </section>
          <section id={'Offer'}
                   className={'min-h-[50vh] h-max py-24 bg-foreground flex flex-col gap-8 justify-center items-center text-white'}>
              <p className={'pb-4 px-12 text-3xl font-bold m-0 border-b border-primary'}>NASZE USŁUGI</p>
              <div className={'w-[75vw] flex flex-wrap gap-4 justify-center items-center'}>
                  {data?.services.map(item => <ServiceDialog item={item} key={item.id}/>)}
              </div>
          </section>
          <section
              className={'min-h-[50vh] md:min-h-[25vh] h-max flex flex-col gap-8 md:gap-0 md:flex-row justify-center md:justify-around items-center bg-gradient-to-r from-primary to-primary-foreground'}>
              <Image src={'/logo.png'} alt={'Logo'} height={125} width={125}/>
              <div className={'px-6 md:py-0 flex flex-col text-foreground text-center md:text-left text-2xl'}>
                  <p>CHCESZ ZOSTAĆ BARBEREM LUB BARBERKĄ?</p>
                  <p className={'font-black'}>ZAPISZ SIĘ NA NASZ KURS</p>
              </div>
              <Link href={'https://barbershopbrzytwa.booksy.com'} legacyBehavior>
                  <a target={'_blank'}>
                      <Button
                          variant={'outline'}
                          className={'border-foreground bg-transparent border-[0.15rem] rounded-radius h-10 px-6 text-[0.75rem] font-bold hover:text-white'}
                      >
                          <p>UMÓW SIĘ TERAZ!</p>
                      </Button>
                  </a>
              </Link>
          </section>
          <section id={'Team'}
                   className={'min-h-[75vh] h-max py-16 bg-background flex flex-col gap-8 justify-center items-center text-foreground'}>
              <p className={'pb-4 px-12 text-3xl font-bold m-0 border-b border-primary'}>NASZ ZESPÓŁ</p>
              <div className={'w-[75vw] flex flex-wrap gap-4 justify-center items-center'}>
                  {data?.employees.map(employee => (
                      <EmployeeView employee={employee} key={employee.id}/>
                  ))}
              </div>
          </section>
          <section id={'About'}
                   className="min-h-[50vh] h-max px-[5vw] py-12 bg-foreground text-background flex flex-col-reverse gap-8 md:grid grid-cols-2 grid-rows-1 justify-center items-center">
              <div className={'flex justify-center items-center'}>
                  <RatesView reviews={data?.reviews} services={data?.services} employees={data?.employees}/>
              </div>
              <div
                  className='h-full flex justify-center items-center border-b pb-4 px-12 md:p-0 md:border-b-0 md:border-l border-primary'>
                  <p className={'text-4xl text-center font-bold m-0'}>OCENY NASZYCH KLIENTÓW</p>
              </div>
          </section>
          <section id={'Gallery'} className={'h-max w-full py-24 bg-background flex flex-col gap-4 items-center'}>
              <p className={'pb-4 px-12 text-3xl font-bold m-0 border-b border-primary'}>GALERIA</p>
              <PhotoGallery photos={data?.images || []}/>
          </section>
          <TraningSec/>
      </main>
  );
}
