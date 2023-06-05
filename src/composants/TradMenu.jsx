 import React from 'react'
 import { useNavigate } from "react-router-dom";

 const TradMenu = () => {
    const navigateTo = useNavigate();
    function handleTradClick(author) {
        navigateTo(`/traditions`);
    }
   return (
     <div className='w-full  flex justify-center mt-10'>
        <div className='w-[250px] shadow-lg bg-white rounded-[12px] p-5 align-center' onClick={() => handleTradClick()}>
            <p className='text-[black!important] text-[22px] text-bold'>Guess traditions with emojis → 💃🏼🕺🏼</p>
        </div>
     </div>
   )
 }
 
 export default TradMenu