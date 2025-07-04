import Image from 'next/image'

export default function CardDrivers() {
  return (
    <section className="flex justify-center px-4 md:px-10 pt-6">
      <div className="w-full max-w-7xl bg-white shadow-md rounded-[32px] px-6 md:px-12 py-12">
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-6">

          {/* Карточка 1 */}
          <div className="flex flex-col p-6 rounded-[22px] border-2 border-slate-200 w-full max-w-[380px] bg-white">
            <Image src="/img/kartochka.svg" alt="доход" width={40} height={40} className="mb-4 w-10 h-10" />
            <div>
              <p className="text-2xl font-bold text-black mb-2">От 6 000 с. в месяц</p>
              <span className="text-base text-slate-500 leading-snug block">
                Ваш доход зависит только от вас — хотите больше, зарабатывайте больше.
              </span>
            </div>
          </div>

          {/* Карточка 2 */}
          <div className="flex flex-col p-6 rounded-[22px] border-2 border-slate-200 w-full max-w-[380px] bg-white">
            <Image src="/img/calendar.svg" alt="график" width={40} height={40} className="mb-4 w-10 h-10" />
            <div>
              <p className="text-2xl font-bold text-black mb-2">Работа без графика</p>
              <span className="text-base text-slate-500 leading-snug block">
                Берите заказы, только когда удобно вам
              </span>
            </div>
          </div>

          {/* Карточка 3 */}
          <div className="flex flex-col p-6 rounded-[22px] border-2 border-slate-200 w-full max-w-[380px] bg-white">
            <Image src="/img/world.svg" alt="свобода" width={40} height={40} className="mb-4 w-10 h-10" />
            <div>
              <p className="text-2xl font-bold text-black mb-2">Всё в ваших руках</p>
              <span className="text-base text-slate-500 leading-snug block">
                Всем рулите вы — нет офиса, босса и рутины
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
