import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {Separator} from "@/components/ui/separator";

export default function Home() {
  return (
      <>
          <div id={'Hero'}
               className={'h-[100vh] w-full bg-cover bg-[url("/assets/IMG_6426.jpg")] flex flex-col gap-5 items-center justify-center px-[25vw] text-center text-white'}>
              <p className={'text-6xl font-black shadow'}>Odkryj Wyjątkową Sztukę Strzyżenia w Naszym Barbershopie</p>
              <Link href={'https://barbershopbrzytwa.booksy.com'} legacyBehavior>
                  <a target={'_blank'}>
                      <Button
                          variant={'outline'}
                          className={'border-white bg-transparent border-[0.15rem] rounded-radius h-10 px-6 text-[0.75rem]'}
                      >
                          <p>UMÓW SIĘ</p>
                      </Button>
                  </a>
              </Link>
          </div>
          <div id={'About'}
               className="h-[50vh] px-[5vw] py-24 bg-background grid grid-cols-3 grid-rows-1 justify-center items-center">
              <div className='flex justify-center items-center'>
                  <p className={'text-4xl font-bold m-0'}>O NAS</p>
              </div>
              <div className='flex justify-center items-center'>
                  <span className={'bg-primary h-96 w-[2px]'}><br/></span>
              </div>
              <div className='flex justify-center items-center'>
                  <p className="m-0 text-lg">
                      Witaj w naszym barbershopie, miejscu, gdzie tradycja spotyka się z nowoczesnością,
                      a elegancja spotyka się z pasją do sztuki strzyżenia. Nasza historia sięga 2016 roku,
                      a nasze umiejętności są efektem wieloletniego doświadczenia w świecie męskiej pielęgnacji.
                      W naszym zespole zgromadziliśmy utalentowanych barberów,
                      dla których strzyżenie to nie tylko praca, ale prawdziwa sztuka.
                      Zawsze dążymy do tego, abyś opuszczał nasze drzwi z nie tylko doskonałym fryzjerstwem,
                      ale także z poczuciem odprężenia i pewności siebie.
                  </p>
              </div>
          </div>
          <div id={'Offer'} className={'h-[100vh] py-24 bg-foreground flex flex-col gap-4 items-center text-white'}>
              <p className={'text-3xl font-bold m-0'}>NASZE USŁUGI</p>
              <span className={'bg-primary h-[1px] w-96'}><br/></span>
              <div>

              </div>
          </div>
          <div
              className={'flex justify-around items-center h-[25vh] bg-gradient-to-r from-primary to-primary-foreground'}>
              <Image src={'/logo.png'} alt={'Logo'} height={125} width={125}/>
              <div className={'flex flex-col text-foreground text-2xl'}>
                  <p>CHCESZ ZOSTAĆ BARBEREM LUB BARBERKĄ?</p>
                  <p className={'font-black'}>ZAPISZ SIĘ NA NASZ KURS</p>
              </div>
              <Link href={'https://barbershopbrzytwa.booksy.com'}>
                  <Button
                      variant={'outline'}
                      className={'border-foreground bg-transparent border-[0.15rem] rounded-radius h-10 px-6 text-[0.75rem] hover:text-white'}
                  >
                      <p>UMÓW SIĘ NA WIZYTĘ</p>
                  </Button>
              </Link>
          </div>
          <div id={'Team'} className={'h-[100vh] py-24 bg-background flex flex-col gap-4 items-center text-foreground'}>
              <p className={'text-3xl font-bold m-0'}>NASZ ZESPÓŁ</p>
              <span className={'bg-primary h-[1px] w-96'}><br/></span>
              <div>

              </div>
          </div>
          <div id="Training"
               className="h-[50vh] px-[5vw] py-24 bg-foreground text-background grid grid-cols-3 grid-rows-1 justify-center items-center">
              <div className='flex justify-center items-center'>

              </div>
              <div className='flex justify-center items-center'>
                  <span className={'bg-primary h-96 w-[2px]'}><br/></span>
              </div>
              <div className='flex justify-center items-center'>
                  <p className={'text-4xl font-bold m-0'}>OCENY NASZYCH KLIENTÓW</p>
              </div>
          </div>
          <div className={'h-[100vh] py-24 bg-background flex flex-col gap-4 items-center text-foreground'}>
              <p className={'text-3xl font-bold m-0'}>SZKOLENIA</p>
              <span className={'bg-primary h-[1px] w-96'}><br/></span>
              <div>

              </div>
          </div>
          <div id={'Gallery'} className={'h-[100vh] py-24 bg-foreground flex flex-col gap-4 items-center text-white'}>
              <p className={'text-3xl font-bold m-0'}>GALERIA</p>
              <span className={'bg-primary h-[1px] w-96'}><br/></span>
              <div>

              </div>
          </div>
          <div id="Contact"
               className="h-[50vh] px-[5vw] py-24 bg-background grid grid-cols-3 grid-rows-1 justify-center items-center">
              <div className='flex justify-center items-center'>
                  <p className={'text-4xl font-bold m-0'}>KONTAKT</p>
              </div>
              <div className='flex justify-center items-center'>
                  <span className={'bg-primary h-96 w-[2px]'}><br/></span>
              </div>
              <div className='flex justify-center items-center'>

              </div>
          </div>
      </>
  )
}