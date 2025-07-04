'use client'

import { useState } from 'react'

export default function Question() {
  const faqs = [
    {
      question: 'Как пополнить баланс в приложении?',
      answer: 'Чтобы пополнить баланс, перейдите в раздел «Кошелёк» и выберите способ оплаты.',
    },
    {
      question: 'Как оплачиваются безналичные заказы?',
      answer: 'Безналичная оплата списывается автоматически с привязанной карты.',
    },
    {
      question: 'Есть ли компенсация за отменённые заказы?',
      answer: 'В случае отмены заказа по вине сервиса возможна компенсация.',
    },
    {
      question: 'Обязательно ли знать русский язык?',
      answer: 'Знание русского языка желательно для общения с клиентами.',
    },
  ]

  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="flex justify-center px-4 md:px-10 py-6">
      <div className="w-full max-w-7xl bg-white shadow-md rounded-[32px] px-6 md:px-12 py-12">
        <h1 className="text-3xl md:text-[52px] font-bold text-black mb-10">
          Отвечаем на вопросы
        </h1>

        {faqs.map((item, index) => (
          <div key={index} className="mb-4 border border-slate-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggle(index)}
              className="flex justify-between items-center w-full px-5 py-4 text-lg font-medium text-black cursor-pointer"
            >
              {item.question}
              <span
                className={`text-slate-400 text-xl font-bold transition-transform duration-300 ${
                  openIndex === index ? 'rotate-45' : ''
                }`}
              >
                +
              </span>
            </button>

            <div
              className={`transition-all duration-300 bg-gray-50 text-slate-700 text-base px-5 overflow-hidden ${
                openIndex === index ? 'py-3 max-h-40' : 'max-h-0'
              }`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
