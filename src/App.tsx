import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import WhatsAppButton from './components/WhatsAppButton'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import TransformationsPage from './pages/TransformationsPage'
import KitchensPage from './pages/residential/KitchensPage'
import BathroomsPage from './pages/residential/BathroomsPage'
import BasementsPage from './pages/residential/BasementsPage'
import FlooringPage from './pages/residential/FlooringPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsPage from './pages/TermsPage'
import FAQPage from './pages/FAQPage'
import ProcessPage from './pages/ProcessPage'
import ServiceAreasPage from './pages/ServiceAreasPage'
import OfficesPage from './pages/commercial/OfficesPage'
import RetailPage from './pages/commercial/RetailPage'
import RestaurantsPage from './pages/commercial/RestaurantsPage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <>
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
      <WhatsAppButton />
    </>
  )
}
