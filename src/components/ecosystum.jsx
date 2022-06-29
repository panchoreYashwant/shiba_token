import React from "react";
function Ecosystum() {
  return <>
    <div className="eco">
    <div className=" container row px-5">
        <div className="col-lg-7 ">
            <h1 className="fw-bold display-5 text-white mb-5">Our Project & Ecosystem</h1>
            <h6 className="text-muted lh-base mb-5 " style={{fontSize:"18px"}} >From its inception, Shiba Inu has done things differently. Starting with a supply <br /> of 1 quadrillion, our founder, Ryoshi, locked 50% in Uniswap, then “burned” <br /> the other half to Ethereum co-founder  <b className="text-white">Vitalik Buterin</b> for safekeeping.</h6>
            <h6 className="text-muted lh-base" style={{fontSize:"18px"}}>
            To help reverse the devastating spread of Covid-19 in India, VB has since <br /> utilized SHIB in the largest crypto donation in history, and then <b className="text-white">actually</b> <br /> burned 40% of its total supply to a dead wallet, ensuring our long-term <br /> success and stability. In the words of Ryoshi, “Thank you to the woofmeister <br /> for enabling true decentralization. Now we truly begin.”


            </h6>
        </div>
        <div id="small-card" className="col-lg-5 d-flex  text-center text-light  align-items-center p-auto">
            <div className="card-body  w-100">
                <div className="horse mb-5 ">4</div>
                <p className="pt-5">Liquidity Locked to uniswap</p>
            </div>
            <div className="card-body w-100">
                <div></div>
                <p>India's Covid Relief Fund</p>
            </div>
            <div className="card-body w-100">
                <div></div>
                <p>Vitalik Buterin Burn</p>
            </div>
        </div>
    </div>
    </div>
   </>;
}
export default Ecosystum;
