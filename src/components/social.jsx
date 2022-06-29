import React from "react";
function Social(){
    return(<>
    <div className="social pt-5 text-center">
        <div className="mt-5" >
            <p className="lh-lg text-muted">Our community grows stronger every day. Please follow our social platforms to get the most up-to-date, <br /> accurate SHIB information.</p>
        </div>
        <div className="d-flex justify-content-evenly mt-5 p-5 text-light">
            <div>
                <img src="assets/ico-tel.svg" width={"50px"} alt="" />
                <p>Shiba <br /> Ecosystem <br /> Telegram</p>
            </div>
            <div>
                <img src="assets/ico-tw.svg" width={"50px"} alt="" />
                <p>twitter</p>
            </div>
            <div>
                <img src="assets/ico-red.svg" width={"50px"} alt="" />
                <p>Reddit</p>
            </div>
            <div>
                <img src="assets/ico-dis.svg" width={"50px"}  alt="" />
                <p>Discord</p>
            </div>
            <div>
                <img src="assets/instagram.svg" width={"50px"} alt="" />
                <p>Instagram</p>
            </div>
        </div>
        <div className="text-light d-flex ">
            <p>medium</p>
            <p>Etherscan</p>

            <p>CoinMarketCap</p>
            <p>CoinGecko</p>


        </div>
    </div>
    </>);
}
export default Social;