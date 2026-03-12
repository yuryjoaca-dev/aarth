import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import StickyCallBar from './StickyCallBar'

export default function Layout() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <StickyCallBar />
    </div>
  )
}
