import Image from 'next/image'
import Link from 'next/link'

export default function AboutDrivers() {
  return (
    <section className="flex justify-center px-4 md:px-10 pt-6">
      <div className="relative w-full max-w-7xl bg-white shadow-md rounded-[32px] p-6 md:p-12 lg:p-[60px] overflow-hidden flex flex-col lg:flex-row items-start">
        {/* Текст */}
        <div className="flex flex-col gap-4 z-10 max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[70px] font-extrabold leading-tight text-green-600">
            Зарабатывайте вместе с Сайр Такси
          </h1>
          <p className="text-slate-700 text-lg sm:text-xl lg:text-[28px] max-w-md">
            Нужно лишь авто и желание отправиться в путь.
          </p>

          <div className="md:mt-8 mt-4 md:mb-24 mb-10">
            <Link
              href="/for-drivers"
              className="inline-block text-white text-lg font-medium bg-green-600 rounded-full md:px-10 px-6 md:py-4 py-2 hover:bg-green-700 transition"
            >
              Стать водителем
            </Link>
          </div>
        </div>

        {/* Изображения */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Машина */}
          <Image
            src="/img/car_bkg.png"
            alt="Машина"
            width={1250}
            height={700}
            className="absolute md:right-[-340px] right-[-100px] md:right-[-80px] md:bottom-[-250px] bottom-[-90px] lg:left-[430px] w-[400px] md:w-[1250px] lg:w-[1200px]"
          />

          {/* Мальчик */}
          <Image
            src="/img/boy.png"
            alt="Мальчик"
            width={620}
            height={600}
            className="absolute right-[-20px] bottom-0 w-[200px] md:w-[500px] lg:w-[620px]"
          />
        </div>
      </div>
    </section>
  )
}
