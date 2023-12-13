import './App.css'
import About from './components/About/About'
import Brands from './components/Brands/Brands'
import Contact from './components/Contact/Contact'
import Detail from './components/Detail/Detail'
import Footer from './components/Footer/Footer'
import Gallery from './components/Gallery/Gallery'
import Hero from './components/Hero/Hero'
import MainContent from './components/MainContent/MainContent'
import Navbar from './components/Navbar/Navbar'
import Services from './components/Services/Services'


function App() {

  return (
    <>
     <Navbar />
     <MainContent />     
     <Hero />
     <Gallery />
     <About />
     <Services />
     <Detail />
     <Brands />
     <Contact />
     <Footer />
    
    </>
  )
}

export default App
