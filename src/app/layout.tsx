import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Header } from 'components'

const circular = localFont({
  src: [
    {
      path: '../assets/fonts/CircularStd-Book.woff2',
      weight: '350',
      style: 'normal',
    },
    {
      path: '../assets/fonts/CircularStd-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/CircularStd-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-circular',
})

export const metadata: Metadata = {
  title: 'Loja Turismo',
  description: 'Nós realizamos as férias dos seus sonhos.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className={`${circular.variable} font-circular`}>
      <body className="bg-gray-5">
        <Header></Header>
        <main>{children}</main>
      </body>
    </html>
  )
}
