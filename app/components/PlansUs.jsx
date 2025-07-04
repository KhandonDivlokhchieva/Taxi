export default function PlansUs() {
  return (
    <section id="plans-us" className="flex justify-center px-4 pt-6">
      <div className="w-full max-w-7xl bg-white rounded-3xl shadow-lg p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-black">
          Тарифы
        </h1>

        {/* Контейнер для скролла на мобилках */}
        <div className="mt-16 flex gap-6 md:gap-8 overflow-x-auto lg:overflow-visible scrollbar-hide lg:grid lg:grid-cols-4">

          {/* Карточка */}
          <div className="flex-shrink-0 w-[280px] flex flex-col p-6 rounded-2xl border border-gray-300 gap-4 bg-white">
            <p className="text-xl font-medium text-black">Развозка</p>
            <div>
              <p className="text-2xl font-bold text-green-600">10 сомони</p>
              <span className="text-base font-medium text-slate-500">Первые 3 километра</span>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-600">2,5 сомони</p>
              <span className="text-base font-medium text-slate-500">Далее каждый км</span>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-600">0,6 сомони</p>
              <span className="text-base font-medium text-slate-500">Ожидания</span>
            </div>
          </div>

          {/* Остальные карточки */}
          <div className="flex-shrink-0 w-[280px] flex flex-col p-6 rounded-2xl border border-gray-300 gap-4 bg-white">
            <p className="text-xl font-medium text-black">Бизнес развозка</p>
            <div>
              <p className="text-2xl font-bold text-green-600">20 сомони</p>
              <span className="text-base font-medium text-slate-500">Первые 3 километра</span>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-600">2,5 сомони</p>
              <span className="text-base font-medium text-slate-500">Далее каждый км</span>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-600">0,8 сомони</p>
              <span className="text-base font-medium text-slate-500">Ожидания</span>
            </div>
          </div>

          <div className="flex-shrink-0 w-[280px] flex flex-col p-6 rounded-2xl border border-gray-300 gap-4 bg-white">
            <p className="text-xl font-medium text-black">Трезвый водитель</p>
            <div>
              <p className="text-2xl font-bold text-green-600">50 сомони</p>
              <span className="text-base font-medium text-slate-500">Первые 3 километра</span>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-600">2,5 сомони</p>
              <span className="text-base font-medium text-slate-500">Далее каждый км</span>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-600">60 дирам/минута</p>
              <span className="text-base font-medium text-slate-500">Ожидания</span>
            </div>
          </div>

          <div className="flex-shrink-0 w-[280px] flex flex-col p-6 rounded-2xl border border-gray-300 gap-4 bg-white">
            <p className="text-xl font-medium text-black">Реклама</p>
            <div>
              <p className="text-2xl font-bold text-green-600">от 370 сомони</p>
              <span className="text-base font-medium text-slate-500">1 автомобиля</span>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-600">от 2 дирам</p>
              <span className="text-base font-medium text-slate-500">SMS-рассылка</span>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-600">20 дирам</p>
              <span className="text-base font-medium text-slate-500">Озвучивание аудиороликов</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
