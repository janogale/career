import React from "react"

import Button from "../components/button"

const Hero = ({ text, image, cta }) => (
  <section className="bg-primary px-4 md:px-0" style={{ minHeight: `300px` }}>
    <div className="w-full md:w-4/5 mx-auto flex flex-wrap md:justify-between pt-6 md:pt-16">
      <div className="w-full md:w-1/2">
        <h2 className="text-white font-bold text-xl md:text-2xl md:mr-20 font-body mt-0">
          {text}
        </h2>
        {cta && <Button to={cta.to}>{cta.text}</Button>}
      </div>
      <div className="hidden md:block h-16 w-12 md:w-1/2">{image}</div>
    </div>
  </section>
)

export default Hero
