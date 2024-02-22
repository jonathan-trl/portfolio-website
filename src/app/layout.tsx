import type { Metadata } from 'next'
import { Barlow_Condensed, Plus_Jakarta_Sans } from 'next/font/google'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { ScrollTopButton } from './components/common/ScrollTopButton'
import { Footer } from './components/layout/Footer'
import './globals.css'
import { ThemeProvider } from './providers'

const barlow_condensed = Barlow_Condensed({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: "--font-barlow-condensed"
})

const plus_jakarta_sans = Plus_Jakarta_Sans({
  weight: ['500', '700', '800'],
  subsets: ['latin'],
  variable: "--font-plus-jakarta-sans"
})

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
      <body
        className={`${barlow_condensed.variable} ${plus_jakarta_sans.variable} font-barlow-condensed`}
      >
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
