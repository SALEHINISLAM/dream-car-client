import React, { useState } from "react";
import PropTypes from "prop-types";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
const Banner = (props) => {
  const [dotLottie, setDotLottie] = useState(null);
  const dotLottieRefCallback = (dotLottie) => {
    setDotLottie(dotLottie);
  };
  return (
    <div className="hero bg-gray-800 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse justify-center items-center text-white">
      <div className="lg:w-1/2 h-full bg-[#c2c2c2] rounded-xl">
      <DotLottieReact src="https://lottie.host/aa932578-5d88-45e5-8e91-094dff028482/BzskT4iBYl.json" loop autoplay dotLottieRefCallback={dotLottieRefCallback} style={{width:"100%", height:"100%"}}/>
      </div>
      
        <div className="lg:w-1/2">
          <h1 className="text-5xl font-bold">Grab your dream Car Now !!!</h1>
          <p className="py-6">
            Every one has a dream of own car . But viewing many car is not so easy at your home . To reduce your hustle We come with a large amount of car in front of you.  So, why late? Select your dream car from here and fulfil your dream. 
          </p>
          <a href="/login">
          <button className="btn btn-primary">Get Started</button>
          </a>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {};

export default Banner;
