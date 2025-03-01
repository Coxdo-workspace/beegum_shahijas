import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Products from "./Products";
import Tradition from "./Tradition";
import Contact from "./Contact";
import Footer from "./Footer";
import FontSetup from "./FontSetup";

function App() {
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
}

export default App;
