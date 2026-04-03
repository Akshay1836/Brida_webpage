import React from "react";
import Hero from "./Hero";
import BridalExperience from "./BridalExperience";
import ImageSection from "./ImageSection";
import ProductGallery from "./ProductGallery";
import BridalTestimonials from "./BridalTestimonials";
import VideoGalleryNew from "./VideoGalleryNew";
import VipListSignup from "./VipListSignup";

function HomePage() {
  return (
    <main id="home">
      <Hero />
       <ImageSection />
      <BridalExperience />
     
      <ProductGallery />
      <BridalTestimonials />
      <VideoGalleryNew />
      <VipListSignup />
    </main>
  );
}

export default HomePage;