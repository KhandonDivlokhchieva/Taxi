export default function Contacts() {
  return (
    <section className="flex justify-center px-4 py-6">
      <div className="w-full max-w-7xl bg-white shadow-md rounded-[32px] px-6 md:px-12 py-10">
        <h1 className="text-3xl md:text-5xl font-bold text-black">Контакты</h1>

        <div className="flex flex-col md:flex-row justify-between gap-6 mt-8 md:mt-20">
          {/* Вызов такси */}
          <div>
            <p className="text-slate-500 text-lg md:text-2xl font-medium">Вызов такси</p>
            <span className="text-green-600 text-xl md:text-2xl font-bold block mt-1">
              83 83
            </span>
          </div>

          {/* Прием водителей */}
          <div>
            <p className="text-slate-500 text-lg md:text-2xl font-medium">Прием водителей</p>
            <span className="text-green-600 text-xl md:text-2xl font-bold block mt-1">
              +992 44 600 80 09
            </span>
          </div>

          {/* Адрес */}
          <div>
            <p className="text-slate-500 text-lg md:text-2xl font-medium">Адрес</p>
            <span className="text-green-600 text-xl md:text-2xl font-bold block mt-1">
              Республика Таджикистан,<br />
              г. Бохтар, ул. Карамова 29
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
