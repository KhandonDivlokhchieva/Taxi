'use client';
import { useState } from 'react';

export default function Apply() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Проверка полей
    if (!name.trim() || !phone.trim() || !message.trim()) {
      alert('Пожалуйста, заполните все поля.');
      return;
    }

    // Проверка номера: только цифры
    if (!/^\d+$/.test(phone)) {
      alert('Поле "Телефон" должно содержать только цифры.');
      return;
    }

    setLoading(true);

    const res = await fetch('/api/sendMessage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, message }),
    });

    const data = await res.json();
    setLoading(false);

    if (data.ok) {
      alert('Заявка успешно отправлена!');
      setName('');
      setPhone('');
      setMessage('');
    } else {
      alert('Ошибка при отправке');
    }
  };

  return (
    <section className="flex justify-center px-4 md:px-10 pt-6">
      <div className="relative flex flex-col md:pb-10 lg:flex-row items-center
                      w-full max-w-7xl bg-green-600 rounded-[32px] overflow-hidden
                      pt-10 lg:pt-16 text-white">
        <div className="px-6 md:px-12 lg:px-[60px] w-full">
          <form onSubmit={handleSubmit} className="max-w-xl">
            <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-bold mb-6">
              Подайте заявку, и мы пригласим<br />вас присоединиться к нашей команде.
            </h1>

            <input
              type="text"
              placeholder="ФИО"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border-2 border-white text-white
                         mb-4 bg-transparent placeholder-white outline-none"
              disabled={loading}
            />

            <input
              type="text"
              placeholder="Номер телефона (только цифры)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border-2 border-white text-white
                         mb-4 bg-transparent placeholder-white outline-none"
              disabled={loading}
            />

            <textarea
              placeholder="Оставьте своё сообщение"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 rounded-lg border-2 border-white text-white
                         mb-6 bg-transparent placeholder-white outline-none resize-none"
              disabled={loading}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-green-600 font-bold py-3 rounded-lg
                         hover:bg-gray-100 transition disabled:opacity-50"
            >
              {loading ? 'Отправка...' : 'Подать заявку'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
