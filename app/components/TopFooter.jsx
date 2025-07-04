import Link from 'next/link';

export default function TopFooter() {
  return (
    <>
      <footer className="bg-white w-full px-4 md:px-8 lg:px-20 py-6 flex flex-col sm:flex-row items-start md:items-center justify-between rounded-t-[22px] md:rounded-none">
        {/* Логотип */}
        <img src="/img/logo.svg" alt="Логотип" className="h-8 md:h-10 mb-4 sm:mb-0" />

        {/* Соцсети */}
        <div className="flex items-center md:gap-4 gap-1">
          <img src="/img/instagram.svg" alt="Instagram" className="h-8 w-8" />
          <img src="/img/facebook.svg" alt="Facebook" className="h-8 w-8" />
          <img src="/img/telegramm.svg" alt="Telegram" className="h-8 w-8" />
          <img src="/img/whatsapp.svg" alt="WhatsApp" className="h-8 w-8" />
        </div>
      </footer>

      <footer className="w-full bg-white border-t border-slate-200 px-4 md:px-10 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-32 items-center justify-around">
          {/* Левая часть: Sayr + Контакты */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-28">
            {/* Sayr */}
            <div className="max-w-sm">
              <p className="text-base text-black mb-4">
                ООО "Сайр Такси", Республика Таджикистан,<br />
                г. Бохтар, ул. Карамова 29
              </p>
              <p className="text-base text-black">ИНН 020033332</p>
            </div>

            {/* Контакты */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <img src="/img/phone_ft.svg" alt="phone" className="w-8 h-8" />
                <div>
                  <p className="text-sm text-slate-400">Вызов такси</p>
                  <span className="text-base text-black">83 83</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <img src="/img/whatsapp_ft.svg" alt="whatsapp" className="w-8 h-8" />
                <div>
                  <p className="text-sm text-slate-400">Whatsapp</p>
                  <span className="text-base text-black">+992 44 600 80 09</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <img src="/img/phone_ft.svg" alt="phone" className="w-8 h-8" />
                <div>
                  <p className="text-sm text-slate-400">Прием водителей</p>
                  <span className="text-base text-black">+992 44 600 80 09</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <img src="/img/email.svg" alt="email" className="w-8 h-8" />
                <div>
                  <p className="text-sm text-slate-400">Электронный адрес</p>
                  <span className="text-base text-black">info@sayrtaxi.tj</span>
                </div>
              </div>
            </div>
          </div>

          {/* Информация */}
          <div className="flex flex-col gap-1">
            <span className="text-base text-slate-400 mb-1">Информация</span>
            <div className="flex flex-col gap-1">
              <a href="#about-us" className="text-base text-black hover:underline">
                О нас
              </a>
              <a href="#plans-us" className="text-base text-black hover:underline">
                Тарифы
              </a>
              <a href="#services-us" className="text-base text-black hover:underline">
                Услуги
              </a>
              <a href="#mobile-apps" className="text-base text-black hover:underline">
                Приложение
              </a>
              <Link href="/for-drivers" className="text-base text-black hover:underline">
                Водителям
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
