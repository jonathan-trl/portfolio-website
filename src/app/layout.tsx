import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { ScrollTopButton } from './components/common/ScrollTopButton'
import { Footer } from './components/layout/Footer'
import './globals.css'
import { ThemeProvider } from './providers'
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
    <html lang="pt-br" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Footer />
          <ScrollTopButton />
        </ThemeProvider>
      </body>
    </html>
  )
}
