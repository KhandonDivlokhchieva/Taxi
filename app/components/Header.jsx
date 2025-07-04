'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <header className="bg-white shadow-md px-6 md:px-20 py-4 flex justify-between items-center relative z-50 rounded-b-[22px] md:rounded-none">

      {/* Логотип */}
      <Link href="/" className="">
        <Image src="/img/logo.svg" alt="Логотип" width={40} height={40} className="h-8 md:h-10 w-auto" />
      </Link>

      {/* Навигация (Desktop) */}
      <nav className="hidden lg:flex items-center gap-8 text-slate-700 text-lg font-normal">
        <a href="#about-us">О нас</a>
        <a href="#plans-us">Тарифы</a>
        <a href="#services-us">Услуги</a>
        <a href="#mobile-apps">Приложение</a>
        <Link href="/forDrivers">Водителям</Link>

        <div className="flex items-center gap-4 ml-6">
          <div className="flex items-center gap-2">
            <Image src="/img/phone-icon.svg" alt="Иконка" width={20} height={20} />
            <a href="#" className="text-black font-bold text-xl">8383</a>
          </div>
          <a href="#map" className="bg-green-600 text-white px-4 py-2 rounded-full">
            Заказать такси
          </a>
        </div>
      </nav>

      {/* Мобильный блок */}
      <div className="flex items-center gap-4 lg:hidden">
        <div className="flex items-center gap-2">
          <Image src="/img/phone.svg" alt="Иконка" width={20} height={20} />
          <a href="#" className="text-black font-bold text-xl">8383</a>
        </div>
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg fill="none" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
            <rect height="30" rx="15" stroke="#16A34A" strokeWidth="2" width="30" x="1" y="1" />
            <rect fill="#94A3B8" height="2" rx="1" width="17" x="7" y="9" />
            <rect fill="#16A34A" height="2" rx="1" width="14" x="10" y="15" />
            <rect fill="#94A3B8" height="2" rx="1" width="17" x="7" y="21" />
          </svg>
        </button>
      </div>

      {/* Мобильное меню */}
      {menuOpen && (
        <div className="bg-[#16A34A] text-white fixed inset-0 flex flex-col items-start p-8 pt-20 text-2xl font-medium gap-8 z-50 transition-opacity duration-300">
          <button className="absolute top-6 right-6" onClick={toggleMenu}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeLinecap="round"
              strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <a href="#about-us" onClick={toggleMenu}>О нас</a>
          <a href="#plans-us" onClick={toggleMenu}>Тарифы</a>
          <a href="#services-us" onClick={toggleMenu}>Услуги</a>
          <a href="#mobile-apps" onClick={toggleMenu}>Приложение</a>
          <Link href="/forDrivers" onClick={toggleMenu}>
            Водителям
          </Link>

          <div className="flex justify-center w-full">
            <a className="bg-white text-[#16A34A] px-6 py-4 rounded-full" href="#map" onClick={toggleMenu}>
              Заказать такси
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
