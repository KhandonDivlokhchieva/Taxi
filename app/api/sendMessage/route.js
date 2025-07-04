export async function POST(request) {
  const { name, phone, message } = await request.json();

  const TOKEN = '7936356582:AAGZPxxc9HWsLKgyjLnmz8RmFmfGsDSkvTM';
  const CHAT_ID = '7141400677';

  const text = `📩 *Новая заявка от пользователя:*\n\n` +
               `👤 *ФИО:* ${name}\n` +
               `📞 *Телефон:* ${phone}\n` +
               `📝 *Сообщение:* ${message}`;

  const res = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text,
      parse_mode: 'Markdown',
    }),
  });

  const data = await res.json();
  return Response.json({ ok: data.ok });
}
