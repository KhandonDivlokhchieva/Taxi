export default function ServicesUs() {
  return (
    <section id="services-us" className="flex justify-center px-4 md:px-8 lg:px-0 pt-6">
      <div className="w-full max-w-7xl bg-white rounded-[32px] shadow-md px-6 md:px-12 py-10">
        <h1 className="text-3xl md:text-5xl font-bold text-black text-center mb-10">
          Услуги
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {/* Карточка 1 */}
          <div className="flex flex-col gap-4 border-2 border-gray-300 rounded-[22px] p-6 max-w-[380px] w-full">
            <img
              src="/img/car_location.svg"
              alt="Развозка"
              className="md:w-16 w-12 h-auto"
            />
            <div>
              <p className="text-2xl font-medium text-black mb-1">Развозка</p>
              <span className="text-base text-slate-500 leading-snug block">
                Осуществляем развозку по г. Бохтар и соседних городов / районов
              </span>
            </div>
          </div>

          {/* Карточка 2 */}
          <div className="flex flex-col gap-4 border-2 border-gray-300 rounded-[22px] p-6 max-w-[380px] w-full">
            <img
              src="/img/location.svg"
              alt="Доставка"
              className="md:w-16 w-12 h-auto"
            />
            <div>
              <p className="text-2xl font-medium text-black mb-1">Доставка</p>
              <span className="text-base text-slate-500 leading-snug block">
                Доставляем вам и вашим родным товары и различные вещи из магазинов, ресторанов и т.д.
              </span>
            </div>
          </div>

          {/* Карточка 3 */}
          <div className="flex flex-col gap-4 border-2 border-gray-300 rounded-[22px] p-6 max-w-[380px] w-full">
            <img
              src="/img/photoparat.svg"
              alt="Реклама"
              className="md:w-16 w-12 h-auto"
            />
            <div>
              <p className="text-2xl font-medium text-black mb-1">Реклама</p>
              <span className="text-base text-slate-500 leading-snug block">
                Наклеивание баннеров, SMS рассылка, распространение буклетов, аудиоролики и др.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
