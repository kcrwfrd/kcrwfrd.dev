import type { Metadata } from 'next'
import { Crimson_Pro, Spectral } from 'next/font/google'
import './globals.css'

const crimsonPro = Crimson_Pro({
  variable: '--font-crimson-pro',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
})

const spectral = Spectral({
  variable: '--font-spectral',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'The Journal',
  description: 'Essays, thoughts, and stories',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${crimsonPro.variable} ${spectral.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
