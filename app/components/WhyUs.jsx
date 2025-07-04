import Image from 'next/image'

export default function WhyUs() {
  return (
    <section className="flex justify-center px-4 md:px-10 pt-6">
      <div className="w-full max-w-7xl bg-white shadow-md rounded-[32px] px-6 md:px-12 pt-12 pb-4">
        
        {/* Заголовок */}
        <h1 className="text-3xl md:text-[52px] font-bold text-black leading-snug">
          Почему водители выбирают
          <span className="block text-green-600">Сайр Такси?</span>
        </h1>

        {/* Карточки */}
        <div className="my-14 flex flex-col lg:flex-row items-stretch justify-between gap-6">

          {/* Карта 1 */}
          <div className="flex flex-col w-full max-w-[380px] md:p-6 gap-4 bg-white">
            <Image src="/img/heart.svg" alt="Быстрее" width={80} height={80} className="w-20 h-20" />
            <div>
              <p className="text-2xl font-medium text-black">Быстрее</p>
              <span className="block text-slate-500 text-base leading-snug">
                Чем искать что-то ещё. Вы можете начать уже сегодня.
              </span>
            </div>
          </div>

          {/* Карта 2 */}
          <div className="flex flex-col w-full max-w-[380px] md:p-6 gap-4 bg-white">
            <Image src="/img/user.svg" alt="Легче" width={80} height={80} className="w-20 h-20" />
            <div>
              <p className="text-2xl font-medium text-black">Легче</p>
              <span className="block text-slate-500 text-base leading-snug">
                Чем устраиваться в таксопарк. Подключиться к системе можно онлайн.
              </span>
            </div>
          </div>

          {/* Карта 3 */}
          <div className="flex flex-col w-full max-w-[380px] md:p-6 gap-4 bg-white">
            <Image src="/img/medal.svg" alt="Надёжнее" width={80} height={80} className="w-20 h-20" />
            <div>
              <p className="text-2xl font-medium text-black">Надёжнее</p>
              <span className="block text-slate-500 text-base leading-snug">
                Чем работать на себя. Клиенты выбирают знакомый бренд с хорошей репутацией.
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
