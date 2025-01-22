import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Services} from "@/config/services";
import ServiceDialog from "@/components/service-dialog";
import {Employees} from "@/config/employees";
import EmployeeView from "@/components/employee-view";
import {RatesView} from "@/components/rates-view";
import {MailIcon, PhoneCallIcon} from "lucide-react";

export default function Home() {
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
                   className="h-[50vh] px-[5vw] py-24 bg-background grid grid-cols-3 grid-rows-1 justify-center items-center">
              <div className='flex justify-center items-center'>
                  <p className={'text-4xl font-bold m-0'}>O NAS</p>
              </div>
              <div className='flex justify-center items-center'>
                  <span className={'bg-primary h-96 w-[2px]'}><br/></span>
              </div>
              <div className='flex justify-center items-center'>
                  <p className="m-0 text-xl">
                      Witaj w Brzytwie, miejscu, gdzie tradycja spotyka się z nowoczesnością, a elegancja z pasją do sztuki klasycznego fryzjerstwa męskiego.
                      Nasza historia sięga 2016 roku a umiejętności są efektem wieloletniego doświadczenia w świecie pielęgnacji męskich włosów i zarostu. Barberzy w Brzytwie to zespół utalentowanych osób,
                      dla których strzyżenie to nie tylko praca ale prawdziwa przyjemność i pasja. Zawsze dążymy do tego,
                      abyś opuszczał  Nasz salon nie tylko z doskonałą fryzurą ale także z poczuciem odprężenia i pewności siebie.
                  </p>
              </div>
          </section>
          <section id={'Offer'} className={'h-max py-24 bg-foreground flex flex-col gap-6 items-center text-white'}>
              <p className={'text-3xl font-bold m-0'}>NASZE USŁUGI</p>
              <span className={'bg-primary h-[1px] w-96'}><br/></span>
              <div className={'w-[75vw] flex flex-wrap gap-4 justify-center items-center'}>
                  {Services.map(item => <ServiceDialog item={item} key={item.id}/>)}
              </div>
          </section>
          <section
              className={'flex justify-around items-center h-[25vh] bg-gradient-to-r from-primary to-primary-foreground'}>
              <Image src={'/logo.png'} alt={'Logo'} height={125} width={125}/>
              <div className={'flex flex-col text-foreground text-2xl'}>
                  <p>CHCESZ ZOSTAĆ BARBEREM LUB BARBERKĄ?</p>
                  <p className={'font-black'}>ZAPISZ SIĘ NA NASZ KURS</p>
              </div>
              <Link href={'https://barbershopbrzytwa.booksy.com'} legacyBehavior>
                  <a target={'_blank'}>
                      <Button
                          variant={'outline'}
                          className={'border-foreground bg-transparent border-[0.15rem] rounded-radius h-10 px-6 text-[0.75rem] font-bold hover:text-white'}
                      >
                          <p>UMÓW SIĘ NA WIZYTĘ</p>
                      </Button>
                  </a>
              </Link>
          </section>
          <section id={'Team'} className={'h-max py-24 bg-background flex flex-col gap-4 items-center text-foreground'}>
              <p className={'text-3xl font-bold m-0 p-0'}>NASZ ZESPÓŁ</p>
              <span className={'bg-primary h-[1px] w-96 mb-4'}><br/></span>
              <div className={'w-[50vw] flex flex-wrap gap-4 justify-center items-center'}>
                  {Employees.map(employee => (
                      <EmployeeView employee={employee} key={employee.id}/>
                  ))}
              </div>
          </section>
          <section
              className="h-max px-[5vw] py-24 bg-foreground text-background grid grid-cols-3 grid-rows-1 justify-center items-center">
              <div className='w-full flex justify-center items-center'>
                  <RatesView/>
              </div>
              <div className='flex justify-center items-center'>
                  <span className={'bg-primary h-96 w-[2px]'}><br/></span>
              </div>
              <div className='flex justify-center items-center text-center'>
                  <p className={'text-4xl font-bold m-0'}>OCENY NASZYCH KLIENTÓW</p>
              </div>
          </section>
          <section id={'Gallery'} className={'h-max py-24 bg-background flex flex-col gap-4 items-center'}>
              <p className={'text-3xl font-bold m-0'}>GALERIA</p>
              <span className={'bg-primary h-[1px] w-96'}><br/></span>
              <div>

              </div>
          </section>
          <section id="Training"
                   className={'h-max py-24 bg-foreground flex flex-col items-center text-foreground text-white'}>
              <p className={'text-3xl font-bold m-0 mb-10'}>SZKOLENIA</p>
              <div className={'w-full grid grid-cols-2 grid-rows-1 justify-between items-center text-center'}>
                  <div className={'border-r border-primary pb-20 flex justify-center items-center py-8'}>
                      <Image src={'/assets/employees/cezar.jpeg'} alt={'Zdjęcie ze szkoleń'} width={300} height={300}/>
                  </div>
                  <div className={'flex flex-col text-left gap-4 px-24'}>
                      <h1 className={'font-black text-2xl'}>KURSY BARBERSKIE - CHORZÓW</h1>
                      <p>
                          Szkolenia Barberskie w Naszym salonie są prowadzone przez doświadczonego Barbera Cesara, który
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
              <div className={'w-full grid grid-cols-2 grid-rows-1 justify-between items-center text-center'}>
                  <div className={'flex flex-col text-left gap-4 px-24'}>
                      <p>
                          Zapraszamy do zapoznania się z Naszą ofertą szkoleniową skierowaną zarówno do początkujących jak również doświadczonych Barberów.
                          Kursy prowadzone są indywidualnie lub w małych 2-3 osobowych grupach co pozwala na max przekazanie wiedzy kursantom.<br/>
                          Do szkoleń podchodzimy indywidualnie dobierając tematykę do Twoich potrzeb.
                      </p>
                      <ul className={'list-disc'}>
                          <li>Indywidualne kursy od zera do barbera</li>
                          <li>Kursy dla zaawansowanych</li>
                          <li>Oferta dla salonów</li>
                      </ul>
                  </div>
                  <div className={'border-l border-primary flex justify-center items-center py-8'}>
                      <Image src={'/assets/IMG_0102.jpg'} alt={'Zdjęcie ze szkoleń'} width={300} height={300}/>
                  </div>
              </div>
              <div className={'w-full grid grid-cols-2 grid-rows-1 justify-between items-center text-center h-max'}>
                  <div className={'border-r border-primary pt-20 flex justify-center items-center py-8'}>
                      <Image src={'/assets/IMG_0105.jpg'} alt={'Zdjęcie ze szkoleń'} width={300} height={300}/>
                  </div>
                  <div className={'flex flex-col text-left gap-4 px-24'}>
                      <p>
                          Po zakończeniu szkolenia zmienisz się w prawdziwego eksperta w dziedzinie stylizacji męskich
                          fryzur oraz zarostu. <br/>
                          Potrzebujesz więcej informacji ? <br/>
                          Zadzwoń lub napisz do Nas: <br/><br/>
                      </p>
                      <div className={'flex gap-4'}>
                          <a href={"tel:+48501343338"}>
                              <Button
                                  variant={'outline'}
                                  className={'border-white bg-transparent border-[0.15rem] rounded-radius h-10 px-6 text-[0.75rem]'}
                              >
                                  <p>501343338</p>
                                  <PhoneCallIcon/>
                              </Button>
                          </a>
                          <a href={"mailto:barbershop.brzytwa@gmail.com"}>
                              <Button
                                  variant={'outline'}
                                  className={'border-white bg-transparent border-[0.15rem] rounded-radius h-10 px-6 text-[0.75rem]'}
                              >
                                  <p>Napisz do nas</p>
                                  <MailIcon/>
                              </Button>
                          </a>
                      </div>
                      <ul className={'list-disc'}>
                          <li>Jesteśmy instytucją szkoleniową wpisaną do RIS</li>
                          <li>Możliwość finansowania z środków Urzędu Pracy</li>
                      </ul>
                  </div>
              </div>
          </section>
      </main>
  );
}
