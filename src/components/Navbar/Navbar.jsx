import React from 'react'
import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return<>
    <nav className="navbar navbar-expand-lg navbar-light py-3 bg-color  "> 
  <div className="container">
    <Link className="navbar-brand ps-5 text-white fw-bolder text-font" to={"/"}>START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="nav nav-pills ms-auto mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <Link className="nav-link active fw-bold me-3 text-white rounded-3" to={"/"}>HOME</Link>
        </li>
        <li className="nav-item" role="presentation">
          <Link className="nav-link fw-bold me-3 text-white" to={"/about"}>ABOUT</Link>
        </li>
        <li className="nav-item" role="presentation">
          <Link className="nav-link fw-bold me-3 text-white" to={"/portfolio"} >PORTFOLIO</Link>
        </li>
        <li className="nav-item" role="presentation">
          <Link className="nav-link fw-bold me-3 text-white" to={"/contact"} >CONTACT</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
}
