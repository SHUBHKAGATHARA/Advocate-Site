import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Adv. Kishor Kagathara - Expert Legal Services in Dhrol, Gujarat',
  description: 'Experienced advocate in Dhrol providing comprehensive legal services including Criminal Defense, Civil Litigation, Family Law, Property Law, Corporate Law, and Employment Law. 15+ years of expertise with 98% success rate.',
  keywords: [
    'lawyer dhrol',
    'advocate dhrol gujarat', 
    'kishor kagathara lawyer',
    'legal services dhrol',
    'criminal lawyer dhrol',
    'property lawyer dhrol',
    'family lawyer dhrol',
    'civil litigation dhrol',
    'corporate lawyer gujarat',
    'employment lawyer',
    'legal consultation dhrol'
  ],
  authors: [{ name: 'Adv. Kishor Kagathara' }],
  creator: 'Adv. Kishor Kagathara',
  metadataBase: new URL('http://localhost:3000'),
  openGraph: {
    title: 'Adv. Kishor Kagathara - Expert Legal Services in Dhrol, Gujarat',
    description: 'Experienced advocate providing comprehensive legal services with 15+ years of expertise. Contact for Criminal Defense, Civil Litigation, Family Law, Property Law, and more.',
    type: 'website',
    locale: 'en_IN',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#fbbf24" />
      </head>
      <body className="bg-slate-900 text-white antialiased overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}