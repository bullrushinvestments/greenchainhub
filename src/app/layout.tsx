import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GreenChainHub',
  description: 'GreenChainHub is a SaaS platform that leverages blockchain technology to enable small businesses to track and prove their sustainability efforts in real-time. It's perfect for e-commerce shops looking to enhance their brand with transparent, trustworthy green credentials.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
