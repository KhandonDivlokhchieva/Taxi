import Header from './components/Header'
import Footer from './components/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

import './globals.css'
