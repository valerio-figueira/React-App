import React from 'react';

    // CSS
    import './LoadingShimmer.css';


function LoadingShimmer(){
    return (
        <div className='shimmer-container'>
            <div className="shimmer-box">
                <div className='shine box'></div>
                <div className='lines'>
                    <span className='shine line'></span>
                    <span className='shine line'></span>
                    <span className='shine line'></span>
                </div>
            </div>

            <div className="shine rectangular-box"></div>
            <div className="shine rectangular-box"></div>

            <div className='shimmer-box'>
                <div className='shine box'></div>
                <div className='lines'>
                    <span className='shine line'></span>
                    <span className='shine line'></span>
                    <span className='shine line'></span>
                </div>
            </div>
        </div>
    )
}

export default LoadingShimmer;