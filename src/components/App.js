import React from "react";
import Intro from "./Intro";
import WhyUs from "./WhyUs";
import Testimonial from "./Testimonial";
import CTA from "./CTA";
import FAQ from "./FAQ";

function App() {
  window.localStorage.setItem("mulaiBtn", "true");
  return (
    <>
      <Intro />
      <WhyUs />
      <Testimonial />
      <CTA />
      <FAQ />
    </>
  );
}

export default App;
