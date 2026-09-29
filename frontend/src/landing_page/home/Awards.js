import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row '>
                <div className='col-6 p-5'>
                    <img src='images/largestBroker.svg'  />
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>Largest stock Broker in India</h1>
                    <p className='mb-5'>Recognized for our excellence in providing stock trading services to millions of customers across India.</p>
                    <div className='row'>
                        <div className='col-6'> 
                           <ul>
                             <li>
                                <p>Futures and Options</p>
                             </li>
                             <li>
                                <p>Commodities derivatives</p>
                             </li>
                             <li>
                                <p>Currency derivatives</p>
                             </li>
                           </ul>
                       </div>
                       <div className='col-6'>
                             <ul>
                                <li>
                                    <p>Stocks & IPO</p>
                                </li>
                                <li>
                                    <p>Direct Mutual Funds</p>
                                </li>
                                <li>
                                    <p>Bonds & Govt Securities</p>
                                </li>
                             </ul>
                       </div>
                    </div>
                   <img src='/images/pressLogos.png'style={{width:"90%"}}/>
                </div>
            </div>
        </div>
     );
}

export default Awards;