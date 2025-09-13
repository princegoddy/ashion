import DiscountBanner from "./componentS/DiscountBanner"
import Footer from "./componentS/footer"
import HeroSection from "./componentS/HeroSection"
import ImageGallery from "./componentS/ImageGallery"
import Navbar from "./componentS/Navbar"
import Passion from "./componentS/Passion"
import ProductGrid from "./componentS/ProductGrid"
import ProductSections from "./componentS/ProductSections"
import ProjectSection from "./componentS/ProjectSection"


function App() {

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <ProductGrid/>
      <ProjectSection/>
      <ProductSections/>
      <DiscountBanner/>
      <Passion/>
      <ImageGallery/>
      <Footer/>
    </>
  )
}

export default App
