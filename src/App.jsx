
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "./styles/global.css";
import EtherealShowcase from "./components/EtherealShowcase";
import BridalTestimonials from "./components/BridalTestimonials";
import VipListSignup from "./components/VipListSignup";
import ProductGallery from "./components/ProductGallery";
import VideoGalleryNew from "./components/VideoGalleryNew";

function App() {

  return (
    <>
 
      <Navbar />
      <Hero />
   
      <ProductGallery/>
      <EtherealShowcase />
  
  
      <VideoGalleryNew/>
      <BridalTestimonials/>
      <VipListSignup />
      <Footer />
    </>
  );
}

export default App;