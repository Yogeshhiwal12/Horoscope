import React from 'react';

export const SelectTimeframe = ({
    
    onTimeframeSelected,
    })=>{
    return (
     <>
        <h2>Please select A Timeframe</h2>
          
          <div className="grid">
    
          {['yesterday','today','tomorrow'].map((timeframes)=>(
            <button className="timeframes" style={{backgroundColor:"gold",opacity:'60%'}} key={timeframes} onClick={()=>onTimeframeSelected(timeframes)}>{timeframes}</button>
          ))}
        </div>
    </>)
}