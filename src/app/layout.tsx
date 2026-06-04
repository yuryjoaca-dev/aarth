import type { Metadata } from 'next'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import StickyCallBar from '../components/StickyCallBar'
import WhatsAppButton from '../components/WhatsAppButton'
import JsonLd from '../components/JsonLd'

export const metadata: Metadata = {
  title: {
    default: 'Kitchen, Bathroom & Basement Renovations | Aarth Construction | Alberta',
    template: '%s | Aarth Construction Inc',
  },
  description: 'Aarth Construction offers expert kitchen, bathroom & basement renovations in Alberta, BC & Saskatchewan. Licensed, trusted, quality craftsmanship. Get a free quote today!',
  metadataBase: new URL('https://www.aarthconstruction.com'),
  openGraph: {
    siteName: 'Aarth Construction Inc',
    type: 'website',
    images: [{ url: '/og-image.jpg' }],
  },
  twitter: { card: 'summary_large_image' },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  '@id': 'https://www.aarthconstruction.com/#business',
  name: 'Aarth Construction Inc',
  url: 'https://www.aarthconstruction.com',
  logo: 'https://www.aarthconstruction.com/logo/logo.webp',
  image: 'https://www.aarthconstruction.com/logo/logo.webp',
  telephone: '+15875962793',
  email: 'aarth.construct@gmail.com',
  description: 'Licensed renovation contractor serving Edmonton and Alberta. Expert kitchen, bathroom, basement, and flooring renovations. Commercial fit-outs across Alberta, BC, and Saskatchewan.',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '16307 111 Ave NW',
    addressLocality: 'Edmonton',
    addressRegion: 'AB',
    postalCode: 'T5M 2S2',
    addressCountry: 'CA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 53.5461,
    longitude: -113.4938,
  },
  areaServed: [
    { '@type': 'City', name: 'Edmonton', containedInPlace: { '@type': 'Province', name: 'Alberta' } },
    { '@type': 'City', name: 'St. Albert', containedInPlace: { '@type': 'Province', name: 'Alberta' } },
    { '@type': 'City', name: 'Sherwood Park', containedInPlace: { '@type': 'Province', name: 'Alberta' } },
    { '@type': 'City', name: 'Calgary', containedInPlace: { '@type': 'Province', name: 'Alberta' } },
    { '@type': 'City', name: 'Vancouver', containedInPlace: { '@type': 'Province', name: 'British Columbia' } },
    { '@type': 'City', name: 'Kelowna', containedInPlace: { '@type': 'Province', name: 'British Columbia' } },
    { '@type': 'City', name: 'Regina', containedInPlace: { '@type': 'Province', name: 'Saskatchewan' } },
    { '@type': 'City', name: 'Saskatoon', containedInPlace: { '@type': 'Province', name: 'Saskatchewan' } },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Renovation Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kitchen Renovation', url: 'https://www.aarthconstruction.com/residential/kitchens' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bathroom Renovation', url: 'https://www.aarthconstruction.com/residential/bathrooms' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Basement Finishing', url: 'https://www.aarthconstruction.com/residential/basements' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Flooring Installation', url: 'https://www.aarthconstruction.com/residential/flooring' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Office Fit-Outs', url: 'https://www.aarthconstruction.com/commercial/offices' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Retail Construction', url: 'https://www.aarthconstruction.com/commercial/retail' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Restaurant Renovations', url: 'https://www.aarthconstruction.com/commercial/restaurants' } },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.2',
    reviewCount: '5',
    bestRating: '5',
    worstRating: '1',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '16:00',
    },
  ],
  sameAs: [
    'https://www.facebook.com/profile.php?id=61583064910290',
    'https://www.instagram.com/aarthconstructioninc/',
    'https://x.com/AarthConstruct',
    'https://network.procore.com/p/aarth-construction-inc-edmonton',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap"
        />
        <JsonLd data={localBusinessSchema} />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCallBar />
        <WhatsAppButton />
      </body>
    </html>
  )
}
