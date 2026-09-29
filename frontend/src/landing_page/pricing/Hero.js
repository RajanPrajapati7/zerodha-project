import React from 'react';

function Hero() {
    return ( 
         <div className="container">
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1>Charges</h1>
        <h3>List of all charges and taxes</h3>
        </div>
         <div className="row p-5 mt-5">
            <div className="col-4  p-3 mt-5">
          <img src="images/pricingEquity.svg" />
          <h1>Free equity delivery</h1>
          <p className="text-muted text-small">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
         <div className="col-4  p-3 mt-5">
           <img src="images/intradayTrades.svg"/>
           <h1>Intraday and F&O trades</h1>
          <p className="text-muted text-small">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
         <div className="col-4  p-3 mt-5">
           <img src="images/pricingEquity.svg" />
           <h1>Free direct MF</h1>
          <p className="text-muted text-small">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
        <div className='container p-5 mb-5'>
            <div className='row text-center'> 
                 <h1 className ='mt-5'>Open Your Account</h1>
                 <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                 <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:'20%', margin:'0 auto'}}>Sign Up for Free</button>
                 </div>

            </div>
        <div className="col-6">
        </div>
      </div>
    </div>
     );
}

export default Hero;