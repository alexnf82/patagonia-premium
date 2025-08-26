import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Bariloche Premium 2025 | Experiências Exclusivas Patagônia',
  description: 'Concierge 24h • Guias Exclusivos • Experiências Únicas em Bariloche. Pacotes premium a partir de R$ 5.900. Reserve sua experiência na Patagônia!',
  keywords: 'Bariloche, Patagônia, viagem premium, concierge, esqui, verão, spring break, Argentina',
  authors: [{ name: 'Patagonia Premium Experience' }],
  openGraph: {
    title: 'Bariloche Premium 2025 | Experiências Exclusivas Patagônia',
    description: 'Concierge 24h • Guias Exclusivos • Experiências Únicas em Bariloche. Pacotes premium a partir de R$ 5.900.',
    type: 'website',
    url: 'https://patagoniapremium.com',
    images: [
      {
        url: 'https://patagoniapremium.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bariloche Premium Experience',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bariloche Premium 2025 | Experiências Exclusivas Patagônia',
    description: 'Concierge 24h • Guias Exclusivos • Experiências Únicas em Bariloche',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
