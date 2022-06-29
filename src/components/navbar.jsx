import React from "react";
function Navbar(){
    return(<><div className="nav-color">
<nav class="navbar navbar-expand-lg mx-5 navbar-dark bg-transparent font-sans-serif" >
  <div class="container-fluid ">
    <a class="navbar-brand d-flex align-items-center" href="#">
        <img src="assets/shib-logo.svg" alt="" />
        <h4 className="fw-bold token m-4">SHIBA TOKEN</h4>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto  me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
      <div class="nav-item dropdown me-4">
          <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            EN
          </a>
          <ul class="dropdown-menu " aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
        {/* <button class="btn border-danger btn-fill w-100   text-light  fw-bold  px-5  rounded-pill" type="submit"> <span><i class="bi bi-arrow-left-right text-light me-2"></i></span> Use Shibaswap</button> */}
        <div className="btn btn-lg border-danger rounded-pill"  id="button-2">
           <div id="slide"></div>
           <a className="nav-link text-light" href="#"> <span><img className="me-3" src="assets/swap-ico.svg" alt="" /></span> Use Shibaswa</a>
        </div>
      </form>
    </div>
  </div>
</nav>
<div className="container">
    <div className="row">
        <div className="col-lg-7 text-light " style={{paddingTop:"100px"}}>
            <h1 className="fw-bold display-5 lh-base ">A Decentralized Meme Token that <br/> Evolved into a Vibrant Ecosystem</h1>
            <p className="text-muted mt-5 lh-lg fs-5">SHIB, LEASH, BONE — ShibaSwap — Innovative Reward System — <br/>The Shiba Incubator — And  more. 585k+ Community Members and <br/> Growing Fast!</p>
            <div className="d-flex mt-5">
                <button className="btn btn-lg  rounded-pill px-5 rescue ">How to Buy</button>
                {/* <button className="btn btn-lg ms-5 btn-outline-danger rounded-pill px-5 text-bold btn-fill">Read WoofPaper v2</button> */}
                <div className="btn btn-lg border-danger rounded-pill ms-5"  id="button-2">
           <div id="slide"></div>
           <a className="nav-link text-light" href="#"> Read WoofPaper v2</a>
        </div>
            </div>
        </div>
        <div className="col-lg-5 hero-moon">
            <img src="assets/moon.svg" alt="moon" />
            <img src="assets/hero-shib.png" className="img-fluid hero-img" alt="hero" />
        </div>
    </div>
</div>
</div>
    </>);
}
export default Navbar;