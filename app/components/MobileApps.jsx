export default function MobileApps() {
  return (
    <section id="mobile-apps" className="flex justify-center px-4 pt-6">
      <div className="relative flex flex-col lg:flex-row justify-between items-center bg-white shadow-md rounded-[32px] w-full max-w-7xl px-6 md:px-12 py-10 lg:py-16 overflow-hidden">
        
        {/* Текстовая часть */}
        <div className="flex flex-col gap-4 z-10 max-w-xl">
          <h1 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-black">
            Мобильное приложение<br />
            Сайр Такси
          </h1>
          <p className="text-base md:text-lg lg:text-[20px] text-slate-700">
            «Сайр Такси» — удобный сервис для быстрого вызова такси без необходимости звонить диспетчеру.
          </p>
          <p className="text-base md:text-lg lg:text-[20px] text-slate-700">
            Вы можете заказать поездку через мобильное приложение SayrTaxi, доступное в PlayMarket и AppStore.
          </p>

          {/* Иконки магазинов */}
          <div className="flex gap-6 mt-4">
            <img src="/img/googleplay.svg" alt="Google Play" className="w-32 h-auto" />
            <img src="/img/appstore.svg" alt="App Store" className="w-32 h-auto" />
          </div>
        </div>

        {/* Изображения */}
        <div className="relative mt-10 lg:mt-0 lg:absolute lg:right-6 lg:bottom-0">
          <img
            src="/img/Ellipse.svg"
            alt="Эллипс"
            className="absolute top-[133px] md:left-8 left-0 md:w-[700px] w-[294px] h-auto z-0"
          />
          <img
            src="/img/iPhone 14.png"
            alt="iPhone"
            className="relative md:left-8 left-0 bottom-[-40px] z-10 w-70 sm:w-56 md:w-64 lg:w-[450px]"
          />
        </div>
      </div>
    </section>
  );
}
