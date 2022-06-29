import React from "react";
function HowToBuy(){
    return(<>
        <div className="htb p-2 font-sens-serif">
                <div className="container ">
              <div className="row">
              <div className="col-lg-7  ">
                    <div className="text-light  my-5">
                        <h1> <b>                        How To Buy</b></h1>
                    </div>
                    <div  className="text-muted lh-lg" style={{fontSize:"18px"}}>
                        <p>SHIB and LEASH are best purchased and sold through ShibaSwap, but can <br /> also be found on Uniswap and an ever-growing list of CEXs. Please note that, <br /> outside of <b className="text-light">ShibaSwap</b>, exchanges which support one may not support the <br /> other.</p>
                    </div>
                    <div className="text-muted lh-lg mt-4" style={{fontSize:"18px"}}>
                        <p>SHIB is a decentralized experiment and, as such, we always incentivize the use <br /> of DEXs. If you choose to utilize a CEX instead, remember to research it first to <br /> ensure it is both safe and secure.</p>
                    </div>
                    <div className="d-flex  mt-5">
                    <button className="btn rescue  btn-lg">Buy SHIB</button>
                    <button className="btn  rescue mx-5 btn-lg">Buy LEASH</button>
                    <button className="btn rescue btn-lg">Buy BONE</button>
                </div>
                
                </div>
                <div className="col-lg-5  ">
                <img className="c1" src="assets/c1.png" alt="c1" />
                
                    <div className="animated">
                        <img className="leash" src="assets/leash_coin-1.png" alt="" />
                        <img src="assets/circle-dashes.svg" alt="" />
                        <img className="bone" src="assets/bone_coin-2.png" alt="" />
                        <img className="shiba" src="assets/shiba_coin-1.png" alt="" />

                    </div>
                    <div className="blur-animated">
                        <img className="bc1 rela" src="assets/bc1.png" alt="" />
                        <img className="bc2" src="assets/bc2.png" alt="" />
                        <img className="bc4" src="assets/bc4.png" alt="" />

                    </div>
                    
                </div>  
              </div>
              <div style={{paddingTop:"150px", paddingBottom:"80px"}}>
              <h1 className="display-5 font-sens-serif fw-bold text-light">Quick Start Guide</h1>

              </div>
              <div className="card-body text-light htb-guid ">
              <div className="d-flex-lg   m-5" >
                  <div>
                     <span className="badge p-3 px-4   rounded-circle"><h1>1</h1></span>

                  </div>
                  <div className="ms-5"><hr className="bg-warning px-5 pt-1 "  /></div>
                    <div className="ms-5">
                        <span><h2>Create MetaMask wallet</h2></span>
                        <p className="mt-4 text-muted" style={{fontSize:"18px"}}>Create a MetaMask Wallet using either a desktop computer or an iOS/Android mobile device. That will allow <br /> you to buy, sell, send, and receive SHIB or LEASH.</p>

                    </div>
            </div> 
            <hr className="mx-5" />
            <div className="d-flex-lg  m-5" >
                  <div>
                     <span className="badge p-3 px-4    rounded-circle"><h1>2</h1></span>

                  </div>
                  <div className="ms-5"><hr className="bg-warning px-5 pt-1 "  /></div>
                    <div className="ms-5">
                        <span><h2>Send ETH to your wallet</h2></span>
                        <p className="mt-4 text-muted" style={{fontSize:"18px"}}>You can buy Ethereum (ETH) directly on MetaMask or transfer it to your MetaMask Wallet from exchanges like <br /> Coinbase, Binance, etc. Make sure to use the ERC-20 network when transfering ETH.</p>

                    </div>
            </div> 
            <hr className="mx-5" />
            <div className="d-flex-lg  m-5" >
                  <div>
                     <span className="badge p-3 px-4    rounded-circle"><h1>3</h1></span>

                  </div>
                  <div className="ms-5"><hr className="bg-warning px-5 pt-1 "  /></div>
                    <div className="ms-5">
                        <span><h2>Connect your wallet to ShibaSwap</h2></span>
                        <p className="mt-4 text-muted" style={{fontSize:"18px"}}>Access your wallet to ShibaSwap by clicking ‘Connect to a wallet’ and selecting MetaMask.</p>

                    </div>
            </div>
            <hr className="mx-5" />

            <div className="d-flex-lg  m-5" >
                  <div>
                     <span className="badge p-3 px-4    rounded-circle"><h1>4</h1></span>

                  </div>
                  <div className="ms-5"><hr className="bg-warning px-5 pt-1 "  /></div>
                    <div className="ms-5">
                        <span><h2>Swap ETH for SHIB, LEASH or BONE</h2></span>
                        <p className="mt-4 text-muted" style={{fontSize:"18px"}}>You can start swapping as soon as you have ETH available! Press ‘Select a token’ and enter the token address <br /> or search for it on the tokens list.</p>

                    </div>
            </div>
              </div>
                 
                </div>
        </div>
    </>)
}
export default HowToBuy;