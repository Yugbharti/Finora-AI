import React from 'react';

function Awards() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-lg-6 col-sm-12 p-5'>
                    <img src='images/largestBroker.svg' alt='Largest Broker in India'/>
                </div>
                <div className='col-lg-6 col-sm-12 p-5 mt-5'>
                    <h1>Largest Stock Broker in India</h1>
                    <p className='mb-5'>2+ million Finora clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>

                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Futures and Options</p>
                                </li>
                                <li>
                                    <p>Comodity and derivatives</p>
                                </li>
                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>

                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Stocks and IPOs</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bonds and Govt. Securities</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src='images/pressLogos.png' alt='Press Logos' style={{width:"90%"}}/>
                </div>
            </div>
        </div>
    );
}

export default Awards;