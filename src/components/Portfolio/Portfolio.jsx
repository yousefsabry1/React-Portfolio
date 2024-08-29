import React, { useState } from 'react'
import "../Portfolio/Portfolio.css"
import png1 from "../../assets/3.jpg"
import png2 from "../../assets/3.jpg"
import png3 from "../../assets/4.webp"
import png4 from "../../assets/4.webp"
import png5 from "../../assets/6.jpeg"
import png6 from "../../assets/6.jpeg"

export default function Portfolio() {


  const [data , setData] = useState( [

    {img: png1 , id:"img1" } ,
    {img: png2 , id:"img2" } ,
    {img: png3 , id:"img3" } ,
    {img: png4 , id:"img4" } ,
    {img: png5 , id:"img5" } ,
    {img: png6 , id:"img6" } ,
  ] )

  return<>
  
  <section className='vh-100 text-white white space'>
    <div className="text-center">
      <h1 className='fw-bolder my-3 gray'>PORTFOLIO COMPONENT</h1>
      <div className="star3 gray">
        <i class="fa-solid fa-star fa-xl"></i>
      </div>
    </div>

    <div className="container m-5">
      <div className="row g-4">

        {data.map( (item) => <>
        <div className="col-md-4">
          <div className='port-item '>
            <img src={item.img} alt="" className='rounded-3 w-100' />
            <div data-bs-toggle="modal" data-bs-target={"#"+ item.id} className="plus rounded-3 d-flex justify-content-center align-items-center text-center">
              <i className='fa-solid fa-plus '></i>
            </div>
          </div>
        </div>
        </> )}

        {data.map( (item) => <>
<div className="modal fade" id={item.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">

      <div className="modal-body p-0">
        <img src={item.img} className='w-100' alt="" />
      </div>
    </div>
  </div>
</div>
        </>)}
      </div>
    </div>

  </section>
  
  </>
  
  
  
  
  
  
}
