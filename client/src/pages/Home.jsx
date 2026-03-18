import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import WhyUs from '../components/WhyUs'
import Portfolio from '../components/Portfolio'
import Team from '../components/Team'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Portfolio />
      <Team />
      <Contact />
      <Footer />
    </>
  )
}

export default Home