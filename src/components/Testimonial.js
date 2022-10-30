import React from 'react';

function Testimonial(){
    return (
        <div id="testimonial">
<div className="container p-7 mt-5">
<h1 align="center"><b>Testimonial</b></h1>
   <p align="center"> 
    Berbagai review positif dari para pelanggan kami
  </p>
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
<div className="carousel-item active">
  <div className="card bg-testi py-5 px-3">
  <div className="row">
  <div className="col-lg-2">
  <img src="images/testi1.svg" width="100" className="img-responsive rounded-circle img-thumbnail" alt="" style={{position:'relative', left:'10%' }} />
  </div>
  <div className="col-lg-10">
  <div className="d-flex">
  <img src="images/rate.svg" alt="rate-star"/>
  </div>
  <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
  <p className="fw-bold">John Dee 32, Bromo</p>
  </div>
  </div>
  </div>
  </div>
<div className="carousel-item">
  <div className="card bg-testi py-5 px-3">
  <div className="row">
  <div className="col-lg-2">
  <img src="images/testi1.svg" width="100" className="img-responsive rounded-circle img-thumbnail" alt="" style={{position:'relative', left:'10%'}} />
  </div>
  <div className="col-lg-10">
  <div className="d-flex">
    <img src="images/rate.svg" alt="rate-star"/>
  </div>
  <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
  <p className="fw-bold">John Dee 32, Bromo</p>
  </div>
  </div>
  </div>
  </div>
<div className="carousel-item">
  <div className="card bg-testi py-5 px-3">
  <div className="row">
  <div className="col-lg-2">
  <img src="images/testi1.svg" width="100" className="img-responsive rounded-circle img-thumbnail" alt="" style={{position:'relative', left:'10%'}} />
  </div>
  <div className="col-lg-10">
  <div className="d-flex">
  <img src="images/rate.svg" alt='rate-star' />
  </div>
  <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
  <p className="fw-bold">John Dee 32, Bromo</p>
  </div>
  </div>
  </div>
  </div>
  </div>
<div className="d-flex justify-content-center gap-2 mt-3">
  <button className="carousel-control carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Next</span>
  </button>
  </div>
  </div>
  </div>
  </div>
 
    )
}

export default Testimonial;