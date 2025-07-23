import React from "react";
import Hero from "../components/Hero";
import HomeSection from "../components/Home";
import Properties from "../components/properties";
import Trusted from "../components/Trusted";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <HomeSection />
      <Properties />
      <Trusted />
      <Testimonials/>
      <Footer/>
    </div>
  );
}
