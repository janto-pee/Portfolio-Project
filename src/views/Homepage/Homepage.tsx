
import Navbar from '../../components/Hero/Navbar'
import Hero from '../../components/Hero/Hero'
import Skills from '../../components/Skills/Skills'
import Portfolio from '../../components/Portfolio/Portfolio'
import Resume from '../../components/Resume/Resume'
import Testimonial from '../../components/Testimonial/Testimonial'
import Blog from '../../components/Blog/Blog'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Hero/Footer'

const Homepage = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Skills />
    <Portfolio />
    <Resume />
    <Testimonial />
    <Blog />
    <Contact />
    <Footer />
    </>
  )
}

export default Homepage