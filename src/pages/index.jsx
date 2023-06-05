import React, { useContext } from "react";
import Header from "../composants/header";
import Speeches from "../composants/speeches";
import { SpeechContext } from '../composants/SpeechContext'; // remplacer par le chemin vers votre fichier contenant SpeechContext

const Home = () => {
  const { speeches } = useContext(SpeechContext);

  return (
    <div className="py-5 px-[25px]">
      <Header />
      <div className="flex justify-center gap-10 flex-wrap px-[25px]">
        {speeches.map((speech) => {
          if (speech.visible) {
            return (
              <Speeches
                key={speech.author}
                photo={speech.photo}
                author={speech.author}
                status={speech.status}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Home;
