import React from "react";
import { LogoWhite } from "../assets";
import { useNavigate } from "react-router-dom";

function Header({setLanguage,  showLanguageSelector = false }) {
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
        <img className="w-[50px]" onClick={() => handleBackClick()} src={LogoWhite}></img>
        {showLanguageSelector && (
        <select name="languages" defaultValue={"English"} id="languages" onChange={handleLanguageChange}>
          <option value="French">French</option>
          <option value="English" >English</option>
          <option value="Danish">Danish</option>
        </select>
      )}
    </div>
)}

export default Header;