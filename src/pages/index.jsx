import React from "react";
import Header from "../composants/header";
import Speeches from "../composants/speeches";
import { SpeechesWedding } from "../constantes";

const Home = () =>  (
    <div className="py-5 px-[25px]">
        <Header />
        <div className="flex justify-center gap-10 flex-wrap px-[25px]">
        {SpeechesWedding.map((speech)=>(
            <Speeches photo={speech.photo} author={speech.author} status={speech.status}/>
        ))}
        </div>
        
    </div>
)

export default Home;