import React, { useState, useEffect } from "react";
import Header from "../composants/header";
import Speeches from "../composants/speeches";
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://togbptjxijlvxlcmssig.supabase.co' // utilisez votre URL Supabase
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvZ2JwdGp4aWpsdnhsY21zc2lnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU5ODI4MDYsImV4cCI6MjAwMTU1ODgwNn0.H0ibQ7SnXHJgrRyNaWb13_-nJwXtmlItRcdIqKKCTCI' // utilisez votre clé API publique
const supabase = createClient(supabaseUrl, supabaseKey)


const Home = () => {
  const [speeches, setSpeeches] = useState([]);

  useEffect(() => {
    const loadSpeeches = async () => {
      const { data, error } = await supabase
        .from('Speeches')
        .select('*');
      if (error) {
        console.error('Error loading speeches', error);
        return;
      }
      setSpeeches(data);
      console.log(data)
    };

    loadSpeeches();
  }, []);

  return (
    <div className="py-5 px-[25px]">
      <Header />
      <div className="flex justify-center gap-10 flex-wrap px-[25px]">
        {speeches.map((speech) => {
            if (speech.visible){
                return (
                    <Speeches
                      key={speech.author}
                      author={speech.author}
                      status={speech.status}
                    />
                  );
            }
            
        })}
      </div>
    </div>
  );
};

export default Home;
