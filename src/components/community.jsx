import React from "react";
function Community() {
  return (
    <>
      <div className="community">
        <div className="text-center p-5 ">
          <h1 className="text-light mb-5 display-5 fw-bold">Community</h1>
          <p className="text-muted lh-lg">
            If you'd like to donate to the <b>Devs</b>,{" "}
            <b className="text-warning">send ETH, SHIB, LEASH or BONE</b> here.
            Thank you for your support! WOOF!
          </p>
          <div >
            <div className="card-body   certik  py-4 d-flex-lg mt-5 w-50 text-light" style={{marginLeft:"25%"}}>
              <p className="mt-2">0xc351155C80aCD043BD5F8FE7ffc8536af1fF9375</p>
              {/* <button
                class="btn border-danger btn-fill text-light  fw-bold py-3 px-5  rounded-pill"
                type="submit"
              >
                {" "}
                <span>
                  <i class="bi bi-clipboard text-light me-2"></i>
                </span>{" "}
                copy to Clipboard
              </button> */}
              <div className="btn ms-3  border-danger rounded-pill"  id="button-2">
           <div id="slide"></div>
           <a className="nav-link text-light" href="#"> <span><img className="me-3" src="assets/swap-ico.svg" alt="" /></span> copy to Clipboard</a>
        </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Community;
