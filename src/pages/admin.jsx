import { SpeechContext  } from '../composants/SpeechContext'; 
import Header from '../composants/header';
import React, { useContext } from 'react';

const Admin = () => {
    const { speeches, setSpeeches } = useContext(SpeechContext);

    const handleCheckboxChange = (index) => {
      const updatedSpeeches = [...speeches];
      updatedSpeeches[index].visible = !updatedSpeeches[index].visible;
      setSpeeches(updatedSpeeches);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
    };

  return (
    <div className='py-5 px-[25px]'>
        <Header  />
        <form onSubmit={handleSubmit}>
        {speeches.map((speech, index) => (
            <div key={index}>
            <label>
                <input
                type="checkbox"
                checked={speech.visible}
                onChange={() => handleCheckboxChange(index)}
                />
                {speech.author} - {speech.status}
            </label>
            </div>
        ))}
        <button type="submit">Enregistrer</button>
        </form>
    </div>
  );
};

export default Admin;
