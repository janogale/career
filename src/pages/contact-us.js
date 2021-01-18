import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Body from "../components/body"

import SEO from "../components/seo"
import ContactUs from "../images/contact.png"
import Map from "../images/google-maps.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <Hero
      text="We're on hand to answer your queries and listen to your feedback"
      image={<img className="h-48" src={ContactUs} alt="background " />}
    />
    <Body>
      <h1>Contact Us</h1>
      <p>
        We would love to hear from you, whether it's making a booking or
        providing some valuable feedback we can use to improve.
      </p>
      <p>
        We will endeavour to get back to you within 48 hours though emails
        usually get answered sooner.
      </p>
      <h3>General enquiries</h3>
      <a className="mt-4 inline-block" href="mailto:email@host.com">
        info@somcareer.com
      </a>
      <p className="mt-4 mb-0">Hargeisa</p>
      <p className="mt-0 mb-0">Emiratul Khair Building</p>
      <p className="mt-2 mb-0">
        <a href="tel:0633333655">
          Call us at <strong>063-3333655</strong>
        </a>
      </p>
      <h2>Where to find us</h2>
      <img src={Map} alt="our location" />
    </Body>
  </Layout>
)

export default IndexPage
