import React from 'react'
import { useNavigate } from "react-router-dom";

function Speeches({photo, author, status}) {

    const navigateTo = useNavigate();
    function handleSpeechClick(author) {
        navigateTo(`/speech/${author}`);
    }
  return (
    <div className='bg-[#972b2b] flex items-center p-[25px] gap-[2rem] rounded-[12px]' onClick={() => handleSpeechClick(author)}>
        <div>
            <p>{author}</p>
            <p>{status}</p>
        </div>
        <div>
            <img className='w-[100px] rounded-[10px]' src={photo} />
        </div>
    </div>
  )
}

export default Speeches