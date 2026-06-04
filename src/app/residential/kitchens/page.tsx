import type { Metadata } from 'next'
import KitchensPage from '../../../views/residential/KitchensPage'
import JsonLd from '../../../components/JsonLd'

export const metadata: Metadata = {
  title: 'Kitchen Renovations Edmonton | Custom Kitchens Alberta',
  description: 'Custom kitchen renovations in Edmonton. Open-concept designs, premium countertops, custom cabinetry. Licensed & insured. Free quotes.',
  alternates: { canonical: 'https://www.aarthconstruction.com/residential/kitchens' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Kitchen Renovation Edmonton',
  description: 'Custom kitchen renovations in Edmonton and Alberta. Open-concept designs, premium countertops, custom cabinetry, backsplash, and full installation.',
  provider: { '@type': 'GeneralContractor', name: 'Aarth Construction Inc', '@id': 'https://www.aarthconstruction.com/#business' },
  areaServed: [{ '@type': 'City', name: 'Edmonton' }, { '@type': 'State', name: 'Alberta' }],
  url: 'https://www.aarthconstruction.com/residential/kitchens',
  serviceType: 'Kitchen Renovation',
}

export default function Page() {
  return <><JsonLd data={schema} /><KitchensPage /></>
}
