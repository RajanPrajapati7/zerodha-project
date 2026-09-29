import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryMore,
  learnDemo,
  googleplay,
  appstore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryMore}>TryMore</a>
            <a href={learnDemo} style={{marginLeft:"50px"}}>LearnDemo</a>
          </div>
          <div className='mt-3'>
            <a href={googleplay}>
              <img src="images/googlePlayBadge.svg" />
            </a>
            <a href={appstore}>
              <img src="images/appstoreBadge.svg" style={{marginLeft:"50px"}}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
