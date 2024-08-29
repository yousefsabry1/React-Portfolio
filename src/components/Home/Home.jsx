import React from 'react'
import logo from '../../assets/student.jpg'
import "../Home/Home.css"

export default function Home() {
  return<>
  
  <header className='vh-100 d-flex align-items-center justify-content-center text-center text-white'>
    <div>
      <img src={logo} alt=''/>
      <h1 className='fw-bolder my-3'>START FRAMEWORK</h1>
      <div className="star">
        <i class="fa-solid fa-star fa-xl"></i>
      </div>
      <p className='mt-3'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  </header>
  </>
}
