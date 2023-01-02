import React from 'react'
import './img.png'

function Hero() {
  return (
    <section id="hero" className="d-flex align-items-center">

    <div className="container">
      <div className="row">
        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
          <h1>SDV 4.0</h1>
          <h2>The Self Driving Vehicle Workshop</h2>
          <div className="d-flex justify-content-center justify-content-lg-start">
            <a href="#about" className="btn-get-started scrollto">Register now</a>
        
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
          <img src='img.png' className="img-fluid animated" alt="k"/>
        </div>
      </div>
    </div>

  </section>
  )
}

export default Hero