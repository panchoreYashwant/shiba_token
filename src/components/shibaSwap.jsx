import React from "react";
function ShibaSwap(){
    return(<>
            <div className="  shibaSwap">
                <div className="container " style={{paddingTop:"150px"}}>
                    <div className="row  gx-5   ">
                        <div className="col-lg-6 p-5  ">
                            <div className="ss-back ">
                                <img src="assets/ss-img2x.png" className="img-fluid " alt="ss.img" />
                            </div>
                            <div className=" d-flex justify-content-center mt-5">
                            {/* <button class="btn border-danger text-light fw-bold  py-3 px-5  rounded-pill btn-fill " type="submit"> <span><i class="bi bi-arrow-left-right text-light me-2"></i></span> Use Shibaswap</button> */}
                            <div className="btn  border-danger rounded-pill "  id="button-2">
                                    <div id="slide"></div>
                                    <a className="nav-link text-light" href="#"> <span><img className="me-3" src="assets/swap-ico.svg" alt="" /></span> Use Shibaswap</a>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6 p-5">
                            <div>
                                <h1 className="fw-bold text-light display-5">ShibaSwap</h1>
                            </div>
                            <div className="card-body certik py-5 mt-5  text-light">
                                <img src="assets/certik-logo.svg" alt="" />
                                <span className="mx-5"><h5 className="badge bg-success ">.</h5>on board</span>
                                {/* <button class="btn border-danger text-light fw-bold py-3 px-4  rounded-pill btn-fill" type="submit"> <span><img className="me-3" src="assets/ico-eye.svg" alt="" /></span> Use Shibaswap</button> */}
                                <div className="btn  border-danger rounded-pill "  id="button-2">
                                    <div id="slide"></div>
                                    <a className="nav-link text-light" href="#"> <span><img className="me-3" src="assets/ico-eye.svg" alt="" /></span> Use Shibaswap</a>
                                </div>

                            </div>
                            <div className="text-muted font-sens-serif mt-5 ">
                                <p className="lh-lg" style={{fontSize:"18px"}}>SHIB, LEASH, and BONE, come together to create ShibaSwap, the next <br /> evolution in DeFi platforms. ShibaSwap gives users the ability to <b className="text-light">DIG</b> <br /> (provide liquidity), <b className="text-light">BURY</b> (stake), and <b className="text-light">SWAP</b> tokens to gain WOOF <b className="text-light">Returns</b> through our sophisticated and innovative passive income reward system.</p>
                                <p className="lh-lg" style={{fontSize:"18px"}}>Our platform also allows the ShibArmy to access upcoming NFTs and <br /> additional tools, such as portfolio trackers, to make navigating the crypto  world simple and intuitive.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>)
}
export default ShibaSwap;