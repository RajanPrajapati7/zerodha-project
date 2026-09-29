import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h2>The Zerodha Universe</h2>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4  p-3 mt-5">
          <img src="images/zerodhaFundhouse.png" style={{ size: "150px", width: "150px" }}/>
          <p className="text-muted text-small"></p>
        </div>
         <div className="col-4  p-3 mt-5">
           <img src="images/sensibullLogo.svg"/>
          <p className="text-muted text-small"></p>
        </div>
         <div className="col-4  p-3 mt-5">
           <img src="images/streakLogo.png"  style={{ size: "150px", width: "150px" }}/>
          <p className="text-muted text-small"></p>
        </div>
         <div className="col-4  p-3 mt-5">
          <img src="images/goldenpiLogo.png"/>
          <p className="text-muted text-small"></p>
        </div>
         <div className="col-4  p-3 mt-5">
           <img src="images/smallcaseLogo.png"/>
          <p className="text-muted text-small"></p>
        </div>
         <div className="col-4 p-3 mt-5">
           <img src="images/dittoLogo.png" style={{ size: "150px", width: "150px" }}/>
          <p className="text-muted text-small"></p>
        </div>
        <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:'20%', margin:'0 auto'}}>Sign Up for Free</button>
      </div>
    </div>
  );
}

export default Universe;
