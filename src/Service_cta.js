import React from 'react'

function Service_cta() {
  return (<>
    {/* <!-- ======= Services Section ======= --> */}
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>organising clubs</h2>
         </div>

        <div className="row">
          <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            {/* <!-- <div className="icon-box">
              <div className="icon"><i className="bx bxl-dribbble"></i></div>
              <h4><a href="">Lorem Ipsum</a></h4>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div> --> */}
          </div>

          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-file"></i></div>
              <h4><a href="">IEEE SB NIT DGP</a></h4>
              {/* <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p> */}
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-tachometer"></i></div>
              <h4><a href="">SAE NIT DGP</a></h4>
              {/* <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p> */}
            </div>
          </div>
        
          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
            {/* <!-- <div className="icon-box"> */}
              {/* <div className="icon"><i className="bx bx-layer"></i></div>
              <h4><a href="">Nemo Enim</a></h4>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div> --> */}
          </div>

        </div>

      </div>
    </section>
    {/* <!-- End Services Section --> */}

    {/* <!-- ======= Cta Section ======= --> */}
    <section id="cta" className="cta">
      <div className="container" data-aos="zoom-in">

        <div className="row">
          <div className="col-lg-9 text-center text-lg-start">
            <h3>Call To Action</h3>
            <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="col-lg-3 cta-btn-container text-center">
            <a className="cta-btn align-middle" href="#">Call To Action</a>
          </div>
        </div>

      </div>
    </section>
    {/* <!-- End Cta Section --> */}
    </>
  )
}

export default Service_cta