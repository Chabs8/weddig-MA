import React from 'react'
import { useParams } from 'react-router-dom';
import { SpeechesWedding } from '../constantes';
import Header from '../composants/header';
import { useState } from 'react';

function Speech() {
    const [language, setLanguage] = useState('English');
    const { author } = useParams();
    const selectedSpeech= SpeechesWedding.find(speech => speech.author === author);
  return (
    
    <div className='py-5 px-[25px]'>
        <Header setLanguage={setLanguage} />
        <div className='flex gap-10 mb-10'>
            <img src={selectedSpeech.photo}  className='w-[150px]'/>
            <h1>{selectedSpeech.author + ' - ' + selectedSpeech.status}</h1>
        </div>
        <p>{selectedSpeech[language]}</p>
    </div>
  )
}

export default Speech