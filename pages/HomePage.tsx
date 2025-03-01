"use client";

import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Tradition from "../components/Tradition";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FontSetup from "../utils/FontSetup";

const HomePage: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col pt-8 bg-amber-200 font-['Beginning_Joy_Bold']">
      <FontSetup />
      <Header />
      <Hero />
      <About />
      <Products />
      <Tradition />
      <Contact />
      <Footer />
    </main>
  );
};

export default HomePage;
