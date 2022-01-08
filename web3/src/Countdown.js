import React, { useEffect, useState } from "react";
function time_convert(num)
 { 
  var hours = Math.floor(num / 60);  
  var minutes = num % 60;
  return hours + "m " + minutes+"s";         
}
const Countdown=()=>{
    const [count,setTime]=useState(1200);
    const [counter,setCounter]=useState("20m 00s");
    useEffect(()=>{
        
        const timer=count>0 && setInterval(()=>{
            setTime(count-1)
            setCounter(time_convert(count))
        },1000)
        return ()=>clearInterval(timer);
    },[count]);

    return (
            <>
            <h3>{counter}</h3>
            </>
    )
}
export default Countdown;