import React from "react";
import "./About.css";
import video from "../../video/aboutMental.mp4";
import { useState, useEffect } from "react";

let timer;
const About = () => {
    const [text, setText] = useState("");
    const para = " Mental health is a critical aspect of overall health and well-being that affects how we think, feel, and behave. Neglecting mental health can lead to various problems such as anxiety, depression, stress, and other serious mental illnesses. Mental health problems can have a significant impact on our relationships, work, and daily activities. It is important to prioritize mental health by seeking help when needed, practicing self-care, and taking steps to maintain emotional balance. There are many effective treatments available for mental health problems, including therapy, medication, and self-care practices such as exercise, mindfulness, and relaxation techniques. By prioritizing mental health, we can improve our quality of life and achieve our full potential."
    useEffect(() => {
        let i = -1;
        timer = setInterval(() => {
          i++;
          if (i === para.length - 1) clearInterval(timer);
          setText((prev) => prev + para[i]);
        }, 40);
      }, []);
    
  return (
    <div className="aboutContainer">
      <div>
        <h1>What is Mental Health?</h1>
        <div className="videoContainer">
          <video autoPlay controls>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <p>
         {text}
        </p>
      </div>
    </div>
  );
};

export default About;
