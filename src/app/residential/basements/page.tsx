import type { Metadata } from 'next'
import BasementsPage from '../../../views/residential/BasementsPage'
import JsonLd from '../../../components/JsonLd'

export const metadata: Metadata = {
  title: 'Basement Finishing Edmonton | Basement Development Alberta',
  description: 'Professional basement finishing in Edmonton. Home theatres, guest suites, wet bars. Licensed & insured. Free quotes.',
  alternates: { canonical: 'https://www.aarthconstruction.com/residential/basements' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Basement Finishing Edmonton',
  description: 'Professional basement finishing and development in Edmonton. Home theatres, guest suites, wet bars, waterproofing, egress windows, and permits included.',
  provider: { '@type': 'GeneralContractor', name: 'Aarth Construction Inc', '@id': 'https://www.aarthconstruction.com/#business' },
  areaServed: [{ '@type': 'City', name: 'Edmonton' }, { '@type': 'State', name: 'Alberta' }],
  url: 'https://www.aarthconstruction.com/residential/basements',
  serviceType: 'Basement Finishing',
}

export default function Page() {
  return <><JsonLd data={schema} /><BasementsPage /></>
}
