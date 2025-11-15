import { Metadata } from 'next'

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
    'legal consultation dhrol',
    'court representation',
    'legal advice gujarat'
  ],
  authors: [{ name: 'Adv. Kishor Kagathara' }],
  creator: 'Adv. Kishor Kagathara',
  publisher: 'Adv. Kishor Kagathara Law Office',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://your-domain.com'), // Replace with actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Adv. Kishor Kagathara - Expert Legal Services in Dhrol, Gujarat',
    description: 'Experienced advocate providing comprehensive legal services with 15+ years of expertise. Contact for Criminal Defense, Civil Litigation, Family Law, Property Law, and more.',
    url: 'https://your-domain.com', // Replace with actual domain
    siteName: 'Adv. Kishor Kagathara - Legal Services',
    images: [
      {
        url: '/og-image.jpg', // Add your OG image
        width: 1200,
        height: 630,
        alt: 'Adv. Kishor Kagathara - Professional Legal Services',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adv. Kishor Kagathara - Expert Legal Services in Dhrol, Gujarat',
    description: 'Experienced advocate providing comprehensive legal services with 15+ years of expertise.',
    creator: '@your_twitter_handle', // Replace with actual Twitter handle
    images: ['/og-image.jpg'], // Add your Twitter image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add Google Search Console verification
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  category: 'Legal Services',
  classification: 'Business',
  referrer: 'origin-when-cross-origin',
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Adv. Kishor Kagathara',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#f59e0b',
    'theme-color': '#f59e0b',
  },
}

// Structured Data for SEO
export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Adv. Kishor Kagathara Law Office',
  description: 'Expert legal services in Dhrol, Gujarat specializing in Criminal Defense, Civil Litigation, Family Law, Property Law, Corporate Law, and Employment Law.',
  url: 'https://your-domain.com', // Replace with actual domain
  telephone: '+91-96383-12551',
  email: 'kbk.advocatedhrol@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Laxminarayan Complex, Near Government Hospital',
    addressLocality: 'Dhrol',
    addressRegion: 'Gujarat',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 22.5726, // Replace with actual coordinates
    longitude: 70.4178, // Replace with actual coordinates
  },
  openingHours: [
    'Mo-Fr 09:00-18:00',
    'Sa 10:00-16:00'
  ],
  sameAs: [
    // Add your social media profiles
    'https://www.facebook.com/your-profile',
    'https://www.linkedin.com/in/your-profile',
    'https://twitter.com/your-profile',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Legal Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Criminal Defense Law',
          description: 'Expert criminal defense representation for all types of criminal charges.'
        }
      },
      {
        '@type': 'Offer', 
        itemOffered: {
          '@type': 'Service',
          name: 'Civil Litigation',
          description: 'Comprehensive civil litigation services for disputes and legal matters.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service', 
          name: 'Family Law',
          description: 'Family law services including divorce, custody, and matrimonial disputes.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Property Law', 
          description: 'Property registration, disputes, and real estate legal services.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Corporate Law',
          description: 'Business registration, compliance, and corporate legal advisory services.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Employment Law',
          description: 'Employment disputes, labor law compliance, and workplace legal issues.'
        }
      }
    ]
  },
  founder: {
    '@type': 'Person',
    name: 'Kishor Kagathara',
    jobTitle: 'Advocate',
    worksFor: {
      '@type': 'LegalService',
      name: 'Adv. Kishor Kagathara Law Office'
    }
  },
  areaServed: [
    {
      '@type': 'State',
      name: 'Gujarat',
      containedInPlace: {
        '@type': 'Country',
        name: 'India'
      }
    }
  ],
  priceRange: '₹₹₹',
  paymentAccepted: 'Cash, Bank Transfer, Online Payment',
  currenciesAccepted: 'INR'
}