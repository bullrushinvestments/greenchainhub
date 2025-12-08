import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GreenChainHub',
  description: 'GreenChainHub is a SaaS platform that leverages blockchain technology to enable small businesses to track and prove their sustainability efforts in real-time. It's perfect for e-commerce shops looking to enhance their brand with transparent, trustworthy green credentials.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">GreenChainHub</h1>
      <p className="mt-4 text-lg">GreenChainHub is a SaaS platform that leverages blockchain technology to enable small businesses to track and prove their sustainability efforts in real-time. It's perfect for e-commerce shops looking to enhance their brand with transparent, trustworthy green credentials.</p>
    </main>
  )
}
