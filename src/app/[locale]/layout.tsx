import { ScrollTopButton } from '@/components/common/ScrollTopButton'
import { Footer } from '@/components/layout/Footer'
import { ThemeProvider } from '@/providers'
import type { Metadata } from 'next'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { Barlow_Condensed, Plus_Jakarta_Sans } from 'next/font/google'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import '../globals.css'

const barlow_condensed = Barlow_Condensed({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-barlow-condensed',
})

const plus_jakarta_sans = Plus_Jakarta_Sans({
  weight: ['500', '700', '800'],
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
})

export const metadata: Metadata = {
  title: 'Portfólio Jonathan Carvalho',
  description: 'Criado por Jonathan Carvalho',
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  const messages = useMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${barlow_condensed.variable} ${plus_jakarta_sans.variable} font-barlow-condensed`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {children}
            <Footer />
            <ScrollTopButton />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
