import React, { useState , useEffect } from 'react';
import { getHoroscope } from '../service/api';
export const Horoscope = ({sign, timeframe})=>{
    
    const[horoscope,setHoroscope]=useState([]);

    useEffect(()=>{
        getHoroscope(sign,timeframe).then(setHoroscope);
      },[sign,timeframe]);
    
    return (
        <>
        <h2>{timeframe}, your horoscope for {sign} is..</h2>
          <p >{horoscope}</p>
        
       </>)

};