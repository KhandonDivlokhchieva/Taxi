export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="flex justify-center px-4 md:px-8 lg:px-0 pt-6 overflow-hidden"
    >
      <div
        className="relative bg-white rounded-[32px] shadow-md w-full max-w-7xl px-6 md:px-16 py-5 md:py-16 flex items-center overflow-hidden"
      >
        {/* Текст */}
        <div className="flex flex-col gap-6 md:gap-12 z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-[52px] font-bold text-black">
            О нас
          </h1>
          <p className="text-slate-700 text-lg sm:text-2xl lg:text-[32px] leading-relaxed lg:leading-[42px]">
            Сайр Такси — это современный и надежный сервис такси, созданный для комфортных и безопасных поездок
            по городу и за его пределами. Мы предлагаем удобное мобильное приложение, прозрачные тарифы и вежливых
            водителей, которые знают, как важно ваше время.
          </p>
        </div>

        {/* Иконка */}
        <div className="absolute right-10 lg:right-[183px] top-[-5px] z-0">
          <img src="/img/line.svg" alt="иконка" />
        </div>
      </div>
    </section>
  )
}
