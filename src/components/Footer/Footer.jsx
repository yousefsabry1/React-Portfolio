import React from 'react'
import '../Footer/Footer.css'

export default function Footer() {
  return<>
  
  <footer className='bg-gray text-center pt-5'>
    <div className="upper-part">
      <div className="footer-card">
        <div className="container-fluid pb-5">
          <div className="row">

              <div className="col-md-4">
              <h3 className=" text-white fw-bold">LOCATION</h3>
              <p className=" text-white">2215 John Daniel Drive</p>
              <p className=" text-white">Clark, MO 65243</p>
            </div>

            <div className="col-md-4">
              <h3 className=" text-white fw-bold">AROUND THE WEB</h3>
                <div className="icon d-flex justify-content-center align-items-center">
                  <div className="icon2 me-3">
                  <i className="fa-brands fa-facebook border-icons  fa-xl text-white"></i>
                  </div>

                  <div className="icon2 me-3">
                  <i className="fa-brands fa-twitter border-icons  fa-xl text-white"></i>
                  </div>

                  <div className="icon2 me-3">
                  <i className="fa-brands fa-linkedin border-icons  fa-xl text-white"></i>
                  </div>

                  <div className="icon2 me-3">
                  <i className="fa-solid fa-globe border-icons fa-xl text-white"></i>
                  </div>
                </div>
            </div>

              <div className="col-md-4">
              <h3 className=" text-white fw-bold">ABOUT FREELANCER</h3>
              <p className=" text-white">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
              </div>
          </div>
        </div>


        <div className="under-part text-center py-3 mt-5">
          <p>Copyright © Your Website 2021</p>
        </div>


      </div>
    </div>
  </footer>

  
  
  
  
  
  
  </>
}
