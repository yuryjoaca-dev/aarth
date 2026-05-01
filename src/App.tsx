import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import WhatsAppButton from './components/WhatsAppButton'

const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const TransformationsPage = lazy(() => import('./pages/TransformationsPage'))
const KitchensPage = lazy(() => import('./pages/residential/KitchensPage'))
const BathroomsPage = lazy(() => import('./pages/residential/BathroomsPage'))
const BasementsPage = lazy(() => import('./pages/residential/BasementsPage'))
const FlooringPage = lazy(() => import('./pages/residential/FlooringPage'))
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'))
const TermsPage = lazy(() => import('./pages/TermsPage'))
const FAQPage = lazy(() => import('./pages/FAQPage'))
const ProcessPage = lazy(() => import('./pages/ProcessPage'))
const ServiceAreasPage = lazy(() => import('./pages/ServiceAreasPage'))
const OfficesPage = lazy(() => import('./pages/commercial/OfficesPage'))
const RetailPage = lazy(() => import('./pages/commercial/RetailPage'))
const RestaurantsPage = lazy(() => import('./pages/commercial/RestaurantsPage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

export default function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="transformations" element={<TransformationsPage />} />
            <Route path="residential/kitchens" element={<KitchensPage />} />
            <Route path="residential/bathrooms" element={<BathroomsPage />} />
            <Route path="residential/basements" element={<BasementsPage />} />
            <Route path="residential/flooring" element={<FlooringPage />} />
            <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="terms" element={<TermsPage />} />
            <Route path="faq" element={<FAQPage />} />
            <Route path="process" element={<ProcessPage />} />
            <Route path="service-areas" element={<ServiceAreasPage />} />
            <Route path="commercial/offices" element={<OfficesPage />} />
            <Route path="commercial/retail" element={<RetailPage />} />
            <Route path="commercial/restaurants" element={<RestaurantsPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog/:slug" element={<BlogPostPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
      <WhatsAppButton />
    </>
  )
}
