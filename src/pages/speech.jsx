import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Header from '../composants/header';
import { createClient } from '@supabase/supabase-js'
import { Finn, Bettina, Mette, Christophe, Eliane, Elodie, Aurelien, Baptiste, MetteFriendAnglais, MetteFriendFrance} from '../assets';
import parse from 'html-react-parser';


const supabaseUrl = 'https://togbptjxijlvxlcmssig.supabase.co' // utilisez votre URL Supabase
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvZ2JwdGp4aWpsdnhsY21zc2lnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU5ODI4MDYsImV4cCI6MjAwMTU1ODgwNn0.H0ibQ7SnXHJgrRyNaWb13_-nJwXtmlItRcdIqKKCTCI' // utilisez votre clé API publique
const supabase = createClient(supabaseUrl, supabaseKey)


function Speech() {
    const [language, setLanguage] = useState('English');
    const [speech, setSpeech] = useState(null);
    const { author } = useParams();
    
    useEffect(() => {
        const fetchSpeech = async () => {
            let { data: speeches, error } = await supabase
                .from('Speeches')
                .select('*')
                .eq('author', author);
            
            if (error) {
                console.error('Error loading speech:', error);
                return;
            }
            if (speeches.length > 0) {
                setSpeech(speeches[0]);
            }
        };

        fetchSpeech();
    }, [author]);

    if (!speech) {
        return <div>Loading...</div>;
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
    if (Aurelien.includes(author)){
        pic = Aurelien
    }
    if (Elodie.includes(author)){
        pic = Elodie
    }
    if (Baptiste.includes(author)){
        pic = Baptiste
    }
    return (
        <div className='py-5 px-[25px]'>
            <Header setLanguage={setLanguage} showLanguageSelector={true} />
            <img className='w-[150px] h-[150px] object-cover ' src={pic} alt={speech.author}></img>
            <div className='flex gap-10 mt-2'>
                <h1 className='text-[25px] text-bold'>{speech.author + ' - ' + speech.status}</h1>
            </div>
            <hr></hr>
            <p className='mt-10'>{parse(speech[language])}</p>

        </div>
    )
}

export default Speech
