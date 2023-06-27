import React from 'react'
import { useNavigate } from "react-router-dom";
import { Daniel, JeanDenis, Julian, PeterMiller, PeterPhilippeau, Marion, Marie, Elodie, AmandaandLindsay } from '../assets';
function Speeches({ author, status}) {

    const navigateTo = useNavigate();
    function handleSpeechClick(author) {
        navigateTo(`/speech/${author}`);
    }
    
    let authors = [Daniel, JeanDenis, Julian, PeterMiller, PeterPhilippeau, Marion, Marie, Elodie, AmandaandLindsay ];
    let pic = "";

    for (let i = 0; i < authors.length; i++) {
        if (authors[i].includes(author.trim())) {
            pic = authors[i];
            break;
        }
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