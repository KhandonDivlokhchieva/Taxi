export default function TaxiMap() {
  return (
    <section className="flex justify-center px-4 pt-6" id="map">
      <div className="relative w-full max-w-7xl h-[610px] rounded-[32px] overflow-hidden shadow-md">
        
        {/* Yandex Map */}
        <iframe
          src="https://yandex.com/map-widget/v1/?ll=68.7739,38.5598&z=12"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        ></iframe>

        {/* Заказ такси */}
        <div className="absolute top-[120px] left-[40px] md:left-[100px] w-[90%] max-w-[310px] bg-white rounded-xl p-4 flex flex-col gap-3 shadow-lg">
          <h1 className="text-xl font-bold text-gray-900">Заказать такси</h1>

          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white">
            <img src="/img/A.svg" alt="A" className="mr-2" />
            <input
              type="text"
              placeholder="Откуда"
              className="flex-1 text-sm border-none focus:outline-none"
            />
            <img src="/img/map_poin.svg" alt="точка" className="ml-2" />
          </div>

          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white">
            <img src="/img/B.svg" alt="B" className="mr-2" />
            <input
              type="text"
              placeholder="Куда"
              className="flex-1 text-sm border-none focus:outline-none"
            />
            <img src="/img/map_poin.svg" alt="точка" className="ml-2" />
          </div>

          <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none">
            <option>Комфорт</option>
          </select>

          <textarea
            placeholder="Комментарий"
            className="w-full h-[60px] border border-gray-300 rounded-lg px-3 py-2 text-sm resize-none focus:outline-none"
          ></textarea>

          <button className="w-full bg-green-600 text-white text-base font-medium py-2 rounded-lg hover:bg-green-700 transition">
            Далее
          </button>
        </div>
      </div>
    </section>
  );
}
