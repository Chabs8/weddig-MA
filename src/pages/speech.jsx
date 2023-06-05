import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Header from '../composants/header';
import { createClient } from '@supabase/supabase-js'

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

    return (
        <div className='py-5 px-[25px]'>
            <Header setLanguage={setLanguage} />
            <div className='flex gap-10 mb-10'>
                <h1>{speech.author + ' - ' + speech.status}</h1>
            </div>
            <p>{speech[language]}</p>
        </div>
    )
}

export default Speech
