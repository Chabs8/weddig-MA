import React from 'react'
import { useNavigate } from "react-router-dom";
import { Finn, Bettina, Mette, Christophe, Eliane } from '../assets';
function Speeches({ author, status}) {

    const navigateTo = useNavigate();
    function handleSpeechClick(author) {
        navigateTo(`/speech/${author}`);
    }
    let pic = "";
    if (Finn.includes(author)){
        pic = Finn
    }
    if (Bettina.includes(author)){
        pic = Bettina
    }
    if (Mette.includes(author)){
        pic = Mette
    }
    if (Eliane.includes(author)){
        pic = Eliane
    }
    if (Christophe.includes(author)){
        pic = Christophe
    }
  return (
    <div className='bg-[#81A094]  shadow-lg flex items-center p-[25px] w-[250px] rounded-[12px]' onClick={() => handleSpeechClick(author)}>
        <div className='w-[100px]'>
            <p>{author}</p>
            <p>{status}</p>
        </div>
        <img className='w-[100px] h-[100px] object-cover rounded-[10px]' src={pic} alt={author}/>
    </div>
  )
}

export default Speeches