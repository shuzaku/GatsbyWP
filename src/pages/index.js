import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section class="hero-section transparent-hero">
      <div class="video-background-container">
        <video autoPlay loop id="video-background" muted playsinline>
          <source src="https://www.gbtech.net//wp-content/uploads/2017/08/GB-Tech-loop.mp4" type="video/mp4" />
        </video>
      </div> 
      <div class="content-container">
        <h1 class="white-text centered-text">Mission-Critical IT Support for a Dynamic World</h1>
        <a class="orange-outline-btn white-text" href="#">Watch Our Video</a>
      </div>
    </section>
    <section>
      <div class="content-container centered-text compressed-content">
        <h2 class="light-weight blue-text">IT Services Provide <span class="heavy-weight">a Launch Pad for Your Business</span></h2>
        <p>Running a business requires courage, ambition and preparation. With IT services by GB Tech, you can feel confident that your business has the foundation it needs to take to the skies. Our services are wide-ranging, including everything from cloud services and help desk support to virtualization and mobile device management. We can equip you with the tools you need to complete any mission.</p>
      </div>
    </section>
    <section>
      <div class="content-container centered-text compressed-content">
        <h2 class="light-weight orange-text">Logistics & Project Management – <span class="heavy-weight">With You Every Step of the Way</span></h2>
        <p>Taking on a major project can be daunting, especially when you’re on a budget and a deadline. GB Tech’s project management skills are battle-tested in some of the world’s most demanding industries, and our logistical expertise is designed to keep everything running smoothly – or help you out of a bind. We’ll never leave you hanging.

</p>
      </div>
    </section>


    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
