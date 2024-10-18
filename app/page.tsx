"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

const HomePage = () => {
  return (
    <>
      <Hero />

      <About />
      <Services />
      <Contact />
    </>
  );
};

export default HomePage;
