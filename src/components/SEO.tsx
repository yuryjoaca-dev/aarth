import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  url?: string
  image?: string
}

const SITE_NAME = 'Aarth Construction Inc'
const BASE_URL = 'https://aarthconstruction.ca'
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80'

export default function SEO({ title, description, url = '', image = DEFAULT_IMAGE }: SEOProps) {
  const fullTitle = `${title} | ${SITE_NAME}`
  const fullUrl = `${BASE_URL}${url}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}
