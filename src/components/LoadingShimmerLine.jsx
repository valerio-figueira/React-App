import React from 'react';

    // CSS
    import './LoadingShimmerLine.css'

function LoadingShimmerLine() {
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
    </div>
  )
}

export default LoadingShimmerLine;