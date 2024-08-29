import React from 'react'
import "../Contact/Contact.css"

export default function Contact() {
  return<>
  
  <section className='contact white space py-5' >
    <div className="text-center">
      <h1 className='fw-bolder my-3 gray'>CONTACT SECTION</h1>
      <div className="star4 gray mb-5">
        <i class="fa-solid fa-star fa-xl"></i>
      </div>
    </div>

    <div className='w-50 m-auto'>
      <form action="">
        <input type="text" placeholder='User Name' className=' mb-5 w-100 form-control form-control-lg border-0 border-bottom rounded-0' />
        <input type="number" placeholder='User Age' className=' mb-5 w-100 form-control form-control-lg border-0 border-bottom rounded-0' />
        <input type="email" placeholder='User Email' className='mb-5 w-100 form-control form-control-lg border-0 border-bottom rounded-0' />
        <input type="password" placeholder='User Password' className='mb-5 w-100 form-control form-control-lg border-0 border-bottom rounded-0' />

        <button className='btn btn-send'>send Message</button>


      </form>
    </div>



  </section>
  
  
  </>
}
