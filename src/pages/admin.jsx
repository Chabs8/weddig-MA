import Header from '../composants/header';
import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

// Initialisez votre client Supabase ici
const supabaseUrl = 'https://togbptjxijlvxlcmssig.supabase.co' // utilisez votre URL Supabase
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvZ2JwdGp4aWpsdnhsY21zc2lnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU5ODI4MDYsImV4cCI6MjAwMTU1ODgwNn0.H0ibQ7SnXHJgrRyNaWb13_-nJwXtmlItRcdIqKKCTCI' // utilisez votre clé API publique
const supabase = createClient(supabaseUrl, supabaseKey)

const Admin = () => {
    const [speeches, setSpeeches] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fetch data from Supabase when component mounts
    useEffect(() => {
        fetchSpeeches();
    }, []);

    const fetchSpeeches = async () => {
        setLoading(true);
        let { data, error } = await supabase
            .from('Speeches')
            .select('*');

        if (error) {
            console.error('Error while fetching data:', error);
        } else {
            setSpeeches(data);
        }

        setLoading(false);
    }

    const handleCheckboxChange = async (index, id) => {
      setLoading(true);

      const updatedSpeeches = [...speeches];
      updatedSpeeches[index].visible = !updatedSpeeches[index].visible;

      const { error } = await supabase
        .from('Speeches')
        .update({ visible: updatedSpeeches[index].visible })
        .eq('id', id);

      if (error) {
        console.error('Error while updating data:', error);
      } else {
        // Re-fetch data to make sure our local state is updated with the database
        fetchSpeeches();
      }

      setLoading(false);
    };

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className='py-5 px-[25px]'>
        <Header />
        <form>
          {speeches.map((speech, index) => (
            <div key={index}>
              <label>
                <input
                  type="checkbox"
                  checked={speech.visible}
                  onChange={() => handleCheckboxChange(index, speech.id)} // Assuming "id" is a unique identifier for each speech
                />
                {speech.author} - {speech.status}
              </label>
              
            </div>
          ))}
        </form>
      </div>
    );
};

export default Admin;
