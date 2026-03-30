
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import "./styles/global.css";
import EtherealShowcase from "./components/EtherealShowcase";
import LuxeEssentialsGrid from "./components/LuxeEssentialsGrid";
import VelvetMediaGallery from "./components/VelvetMediaGallery";
import BridalTestimonials from "./components/BridalTestimonials";
import VipListSignup from "./components/VipListSignup";
import { useState, useCallback, useRef } from "react";
import ImageGallery from "./components/ImageGallery";
import VideoGallery from "./components/VideoGallery";
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