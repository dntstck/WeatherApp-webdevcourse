import React from "react";
import weatherLogo from '/weather-icon.svg'

function Logo(){ // logo component
  return (
    <img src={weatherLogo} className="logo" alt="Weather logo" />
  )
} 

export default Logo;