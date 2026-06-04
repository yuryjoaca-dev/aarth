import type { Metadata } from 'next'
import FlooringPage from '../../../views/residential/FlooringPage'
import JsonLd from '../../../components/JsonLd'

export const metadata: Metadata = {
  title: 'Flooring Installation Edmonton | Hardwood, Tile & Vinyl Alberta',
  description: 'Hardwood, laminate, tile, vinyl flooring installation in Edmonton. Expert installers. Licensed & insured. Free quotes.',
  alternates: { canonical: 'https://www.aarthconstruction.com/residential/flooring' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Flooring Installation Edmonton',
  description: 'Hardwood, laminate, vinyl, tile, and carpet flooring installation in Edmonton. Subfloor prep, refinishing, and expert installation included.',
  provider: { '@type': 'GeneralContractor', name: 'Aarth Construction Inc', '@id': 'https://www.aarthconstruction.com/#business' },
  areaServed: [{ '@type': 'City', name: 'Edmonton' }, { '@type': 'State', name: 'Alberta' }],
  url: 'https://www.aarthconstruction.com/residential/flooring',
  serviceType: 'Flooring Installation',
}

export default function Page() {
  return <><JsonLd data={schema} /><FlooringPage /></>
}
