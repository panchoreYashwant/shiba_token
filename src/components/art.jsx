import React from "react";
function Art(){
    return(<>
    <div className="autoplay">
    <img src="assets/meat-1.svg" alt="" />
    <img src="assets/meat-2.svg" alt="" />
    <img src="assets/meat-3.svg" alt="" />
    
    </div>
    <div className="art">
        <div className="text-center">
            <h1 className="text-light fw-bold display-5 mb-5">Art</h1>
            <p className="text-muted lh-lg" style={{fontSize:"18px"}}>
            We are proud to support ingenuity in all its forms with the <b className="text-warning">Shiba Inu Incubator</b>. The ShibArmy is made up of talented individuals who have united to <br /> build something remarkable, and we support this by cultivating an environment which encourages creativity and growth. Through the power of the <br /> Shiba Inu Incubator, we help holders find the tools they need to bring their inspiration and unique perspectives to life. This as just another way to <br /> encourage others to step outside of preconceived limits and regulations and experience what it means to be part of our decentralized movement.


            </p>
        </div>
        <div className="row mt-5">
            <div className="col-lg-6">
                <h1 className="text-light ">Rescue</h1>
                <p className="text-muted mt-5 lh-lg">
                From the tips of their noses to the ends of their tails, Shiba Inu are intelligent,  brave, and independent, with an equal propensity for loyalty and mischief.  Sadly, the characteristics which make them extraordinary are the same ones  which make them a challenging pet. Inexperienced owners can find  themselves unprepared for a dog that’s known for its bold (i.e. stubborn)  personality.

                </p>
                <p className="text-muted lh-lg mt-5">
                Luckily, we are helping these dogs in real life! We use <b className="text-warning">Amazon Smile</b> to collect and donate a percentage of your Amazon purchases to the <b>Shiba Inu Rescue Association</b>. Joining is easy and free! Just use <a href="" className="text-warning">smile.amazon.com when</a> placing orders and select Shiba Inu Rescue Association (a 501(c)3, preferred non-profit organization). You’re seconds away from helping Shibs in need. Start funding shelters today.


                </p>
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
                <div>

                    <img style={{marginTop:"15%",marginLeft:"10%",marginRight:"-8%"  }} className="position-relative" src="assets/meat-2.svg" alt="" />
                    <button className="btn fs-2 fw-bold text-light  py-4 px-5  rounded rescue">Rescue Me</button>
                    <img cla src="assets/meat-1.svg" alt="" />
                    <img src="assets/meat-3.svg" alt=""  />


                </div>
            </div>
        </div>
    </div>
    </>);
}
export default Art;