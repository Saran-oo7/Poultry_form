import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import About from './components/About.jsx'
import Products from './components/Products.jsx'
import GrowthCycle from './components/GrowthCycle.jsx'
import Gallery from './components/Gallery.jsx'
import Partners from './components/Partners.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import FloatingCTA from './components/FloatingCTA.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Products />
        <GrowthCycle />
        <Gallery />
        <Partners />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
