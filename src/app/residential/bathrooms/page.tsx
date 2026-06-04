import type { Metadata } from 'next'
import BathroomsPage from '../../../views/residential/BathroomsPage'
import JsonLd from '../../../components/JsonLd'

export const metadata: Metadata = {
  title: 'Bathroom Renovations Edmonton | Luxury Bathrooms Alberta',
  description: 'Luxury bathroom renovations in Edmonton. Walk-in showers, freestanding tubs, heated floors. Licensed & insured. Free quotes.',
  alternates: { canonical: 'https://www.aarthconstruction.com/residential/bathrooms' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Bathroom Renovation Edmonton',
  description: 'Luxury bathroom renovations in Edmonton. Walk-in showers, freestanding tubs, custom vanities, heated floors, and full tile work.',
  provider: { '@type': 'GeneralContractor', name: 'Aarth Construction Inc', '@id': 'https://www.aarthconstruction.com/#business' },
  areaServed: [{ '@type': 'City', name: 'Edmonton' }, { '@type': 'State', name: 'Alberta' }],
  url: 'https://www.aarthconstruction.com/residential/bathrooms',
  serviceType: 'Bathroom Renovation',
}

export default function Page() {
  return <><JsonLd data={schema} /><BathroomsPage /></>
}
