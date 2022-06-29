import React from "react";
function CoinCard() {
  return <> 
    <div className="coinCard  ">
        <div className="row  container-fluid   ">
            <div className="col-lg-4">
                <div className="card-body rounded-3 ">
                    <div className="card-img coin-top d-flex justify-content-center ">
                        <img src="assets/shiba_coin-1.png" className="img-top" alt="" />
                        
                    </div>
                    <div className="p-4 py-5 coin-body">
                            <div className="d-flex   text-light">
                                <h1>SHIB</h1> <button className="bg-transparent ms-4 text-light  "><img className="img me-2" src="assets/ico-graph-ora.svg" alt="" /> See Live Charts</button>
                            </div>
                            <div className="mt-5  text-muted"> 
                                <p className="pb-5" style={{fontSize:"18px"}}>The Shiba Inu token is our foundational <br /> currency that allows investors to hold <br /> millions, billions, or even trillions, of it in <br /> their wallets.</p>
                                <p style={{fontSize:"18px"}}>Between its international recognition <br /> and its legitimate utility, <b className="text-danger">SHIB</b> is up <br /> thousands of times and is constantly <br /> expanding its reach. SHIB is the first to <br /> be listed and incentivized on ShibaSwap, <br /> our proprietary DEX.</p>

                           </div>
                           <button className="btn rescue p-3">Buy SHIB</button>
                        </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card-body rounded-3 ">
                    <div className="card-img coin-top d-flex justify-content-center ">
                        <img src="assets/leash_coin-1.png" className="img-top" alt="" />
                        
                    </div>
                    <div className="p-4 py-5 coin-body">
                            <div className="d-flex   text-light">
                                <h1>LEASH</h1> <button className="bg-transparent ms-4 text-light  "><img className="me-2" src="assets/ico-graph-ora.svg" alt="" />See Live Charts</button>
                            </div>
                            <div className="mt-5  text-muted"> 
                                <p className="pb-5" style={{fontSize:"18px"}}>LEASH was originally set to be a rebase <br /> token, but then we removed the rebase <br /> and unleashed its full potential. With a <br /> total supply of ONLY <b className="text-light">107,646 tokens</b>, it <br /> represents the other end of our <br /> Ecosystem spectrum.</p>
                                <p style={{fontSize:"18px"}}>Between its international recognition <br /> and its legitimate utility, <b> className="text-danger">LEASH </b> is the second token incentivized <br /> on ShibaSwap and will offer lucrative <br /> rewards for the holders providing its <br /> liquidity.</p>

                           </div>
                           <button className="btn rescue p-3">Buy LEASH</button>
                        </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card-body rounded-3  ">
                    <div className="card-img coin-top d-flex justify-content-center ">
                        <img src="assets/bone_coin-2.png" className="img-top" alt="" />
                        <img src="assets/ss-glow.svg" width={"100px"} alt="" />
                        
                    </div>
                    <div className="p-4 py-5 coin-body">
                            <div className="d-flex   text-light">
                                <h1>BONE</h1> <button className="bg-transparent ms-4 text-light  "><img className="me-2" src="assets/ico-graph-ora.svg" alt="" />See Live Charts</button>
                            </div>
                            <div className="mt-5  text-muted"> 
                                <p className="pb-5" style={{fontSize:"18px"}}>BONE has 250,000,000 tokens, and is <br /> designed to fit perfectly between the <br /> previous two tokens in regards to <br /> circulation supply.</p>
                                <p style={{fontSize:"18px"}}>Moreover, the token is a Governance <br /> token which will allow the #ShibArmy to <br /> vote on upcoming proposals on our <br /> <b className="text-danger fw-bold">Doggy DAO.</b> </p>

                           </div>
                           <button className="btn rescue p-3">Buy BONE</button>
                        </div>
                </div>
            </div>
            
        </div>
        
    </div>
  </>;
}
export default CoinCard;
