import React from "react";
import { LogoWhite } from "../assets";
import { useNavigate } from "react-router-dom";

function Header({setLanguage}) {
    const navigateTo = useNavigate();
    function handleBackClick() {
        navigateTo(`/`);
    }
        const handleLanguageChange = (event) => {
          const selectedLanguage = event.target.value;
          setLanguage(selectedLanguage);
        };

    return (
    
    <div className="h-[8vh] flex flex-row items-center justify-between">
        <p className="w-[50px]" onClick={() => handleBackClick()}>Back</p>
        <img className="w-[50px]" src={LogoWhite}></img>
        <select name="laguages" id="languages" onChange={handleLanguageChange}>
            <option value="French">French</option>
            <option value="English">English</option>
            <option value="Danish">Danish</option>
        </select>
    </div>
)}

export default Header;