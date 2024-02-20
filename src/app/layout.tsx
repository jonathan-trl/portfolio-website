import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { ScrollTopButton } from './components/common/ScrollTopButton'
import { Footer } from './components/layout/Footer'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfólio Jonathan Carvalho',
  description: 'Criado por Jonathan Carvalho',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <div className="container mx-auto">{children}</div>
        <Footer />
        <ScrollTopButton />
      </body>
    </html>
  )
}
