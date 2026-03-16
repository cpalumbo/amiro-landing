import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogosBar from './components/LogosBar'
import Features from './components/Features'
import Testimonial from './components/Testimonial'
import Pricing from './components/Pricing'
import ContactCta from './components/ContactCta'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-sans text-text bg-white">
      <Navbar />
      <Hero />
      <LogosBar />
      <Features />
      <Testimonial />
      <Pricing />
      <ContactCta />
      <Footer />
    </div>
  )
}
