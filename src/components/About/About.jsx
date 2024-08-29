import React from 'react'
import "../About/About.css"

export default function About() {
  return<>
    <section className='vh-100 d-flex align-items-center justify-content-center text-white'>
    <div>
      <h1 className='fw-bolder mb-3 text-center'>ABOUT COMPONENT</h1>

      <div className="star2 text-center">
        <i class="fa-solid fa-star fa-xl"></i>
      </div>
  
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>

          <div className="col-md-6">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
}
