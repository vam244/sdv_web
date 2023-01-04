import React from 'react'

function Faq() {
  return (
    // <!-- ======= Frequently Asked Questions Section ======= -->
    <section id="faq" className="faq section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
        </div>

        <div className="faq-list">
          <ul>
            <li data-aos="fade-up" data-aos-delay="100">
              <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" className="collapse" data-bs-target="#faq-list-1">What is the SDV workshop? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-1" className="collapse show" data-bs-parent=".faq-list">
                <p>
                SDV -Self Driving Vehicle workshop is an extensive event conducted by SAE NITD and IEEE SB NITD, which primarily focus on educating the participants on how the fascinating Autonomous and self-driving cars work from their basic structural level to the whole picture of Autonomy. The workshop’s theme is based on robotics which are the scaled-down models of real-world autonomous cars and industrial robots.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="200">
              <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-2" className="collapsed">What do we learn from this workshop? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-2" className="collapse" data-bs-parent=".faq-list">
                <p>
                The participants are taught about the robots from scratch of the laboratory testing stage, types of sensors used to achieve each aspect of autonomy, Components of robots that mimic the real-world car. i.e four-wheeled robots and their electrical connections, microcontrollers which process the data incoming from the sensors attached to the bot and the underlying code which is the sole brain of the whole robot simulation.
                 </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="300">
              <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-3" className="collapsed">Who can attend this workshop? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-3" className="collapse" data-bs-parent=".faq-list">
                <p>
                Anyone passionate about robotics who wants to simulate the robots and their electric circuits and code their logic or even just to learn the basics of robotics are most welcome to attend the workshop. </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="400">
              <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-4" className="collapsed">Is this workshop open for everyone or only for NIT Durgapur students? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-4" className="collapse" data-bs-parent=".faq-list">
                <p>
                The workshop is open to everyone. No matter which college you study in. If you hold a passion for robotics, you are cordially invited to attend the workshop. THE WORKSHOP IS OPEN TO EVERYONE.</p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="500">
              <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-5" className="collapsed">Any prerequisites needed to attend the workshop?<i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-5" className="collapse" data-bs-parent=".faq-list">
                <p>
                No theoretical prerequisites are needed to attend the workshop. As a part of physical prerequisites, a laptop with decent internet connectivity is required to do the simulations and attend the meeting. The required softwares for which the download links will be provided after the registration,are to be downloaded and installed beforehand of attending the workshop.
                </p>
              </div>
            </li>

          </ul>
        </div>

      </div>
    </section>
    // <!-- End Frequently Asked Questions Section -->
  )
}

export default Faq