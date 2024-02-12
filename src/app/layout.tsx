import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
