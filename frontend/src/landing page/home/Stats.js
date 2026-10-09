import React from 'react';

function Stats() {
    return ( 
        <div className='container p-3'>
            <div className='row p-5 mb-3'>
                <div className='col-6'>
                    <h1 className='fs-2 mb-5'>Trust with Confidence</h1>
                    <h2 className='fs-4'>Customer-first always</h2>
                    <p className='text-muted mb-5'>That's why 1.6+ crore customers trust Finora with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

                    <h2 className='fs-4'>No spam or gimmicks</h2>
                    <p className='text-muted mb-5'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <span style={{color:"#387ed1"}}>Our philosophies.</span></p>

                    <h2 className='fs-4'>The Finora universe</h2>
                    <p className='text-muted mb-5'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h2 className='fs-4'>Do better with money</h2>
                    <p className='text-muted mb-5'>With initiatives like <span style={{color:"#387ed1"}}>Nudge</span> and <span style={{color:"#387ed1"}}>Kill Switch</span>, we don't just facilitate transactions, but actively help you do better with your money.</p>

                </div>
                <div className='col-6'>
                    <img src='images/ecosystem.png' alt='Ecosystem' style={{width:"90%"}}/>
                    <div className='text-center mt-4'>
                        <a style={{textDecoration:"none"}} className='mx-5'>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a style={{textDecoration:"none"}}>Try Kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className='align-items-center text-center'>
                    <img src='images/pressLogos.png' alt='Press Logos' style={{width:"60%"}}/>
                </div>
            </div>
        </div>
     );
}

export default Stats;