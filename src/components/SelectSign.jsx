import React, {useEffect, useState} from 'react'
import { getSigns } from '../service/api'


export const SelectSign = ({onSignSelected})=>{
    const [signs, setSigns]=useState([]);
    useEffect(()=>{
        getSigns().then(setSigns);
      },[])
return (
    <>
    <h2 className="text-center" >Please select A sign</h2>
      
      <div className="grid sm-3">

      {signs.map((sign)=>(
        <button className="sign" key={sign} onClick={()=>onSignSelected(sign)}>{sign}</button>
      ))}
    </div>
    </>
)
};