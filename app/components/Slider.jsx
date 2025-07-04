import Image from 'next/image'

export default function Slider() {
  return (
    <section id="slider" className="flex justify-center px-4 md:px-8 lg:px-0 pt-6 pb-1">
      <div className="relative w-full max-w-7xl bg-white rounded-[32px] shadow-md overflow-hidden px-6 md:px-12 lg:px-20 py-8 pb-12 md:py-16 flex flex-col lg:flex-row items-start">

        {/* Текстовая часть */}
        <div className="flex flex-col gap-4 z-10 max-w-3xl">
          <h1 className="text-green-600 font-extrabold leading-tight text-[34px] sm:text-[42px] md:text-[56px] lg:text-[70px]">
            Путешествуй легко с Сайр Такси
          </h1>
          <p className="text-slate-700 text-lg sm:text-xl md:text-2xl lg:text-[28px] max-w-md">
            Надежный сервис для поездок по городу и за его пределами
          </p>
          <div className="md:mt-32">
            <Image
              src="/img/elips.svg"
              alt="Эллипс"
              width={160}
              height={160}
              className="w-24 md:w-32 lg:w-40"
            />
          </div>
        </div>

        {/* Фоновая машина */}
        <div className="absolute right-0 bottom-[-10px] w-[220px] sm:w-[350px] md:w-[580px] lg:w-[840px] z-0">
          <Image
            src="/img/car_bkg.png"
            alt="Машина"
            width={840}
            height={440}
            className="w-full"
          />
        </div>
      </div>
    </section>
  )
}
