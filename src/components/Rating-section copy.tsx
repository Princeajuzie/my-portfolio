"use client"
import React, { useEffect } from 'react'

export  function Ratingsection() {


  const HandleFectUser = async ()=>{

    const req = await fetch('http://localhost:3000/utils/ratesheet');
    if (!req.ok) {
      console.error(`Failed to fetch. Status: ${req.status}`);
      const errorData = await req.json();
      console.error(errorData);
      return;
    }
    const res = await req.json();
    const ratesheetdata = res.data;
    console.log("ratesheetdata", ratesheetdata);
    
  }
  useEffect(()=>{
    HandleFectUser()
  },[])
  return (
    <div>
      <h1>hello world</h1>
    </div>
  )
}

export default Ratingsection;
