import React from "react"

import Layout from "../components/layout"
import Body from "../components/body"
import Hero from "../components/hero"
import SEO from "../components/seo"
import HeroImg from "../svg/undraw_mindfulness.svg"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Hero
      text="Find out more about the starter and what it offers"
      image={<HeroImg />}
    />
    <Body>
      <h1 className="font-bold text-teal-500">About Somcareer</h1>
      <p>
        Somcareer com. was established in 2020, The basic services that the
        company provides are the biggest services the company has preparedfor
        the diverse community it serves, and it’s the best communication
        services in the modern world. These services consist of four categories:
      </p>
      <h3 className="font-bold text-teal-500">Services</h3>
      <p>
        The company operates in entire Africa, where it has the widest coverage
        network. somcareer has affiliation with neighboring country’s biggest
        Job Platforms and also share regional and international connections.
      </p>
      <h3 className="font-bold text-teal-500">Visson</h3>
      <p>To be the leader in Job Platform in Africa.</p>
      <h3 className="font-bold text-teal-500">Mission</h3>
      <p>
        To enrich the lives of our community by providing highest quality and
        affordable digital services through innovative technology and dedicated
        workforce.
      </p>
      <ul>
        <li>easy to access job advertisement</li>
        <li>Marketing Announements</li>
        <li>Tenders and Bids Platform</li>
        <li>Self hosted Google fonts via typefaces</li>
        <li>SVG image imports</li>
        <li>Google analytics</li>
      </ul>
    </Body>
  </Layout>
)

export default AboutPage
