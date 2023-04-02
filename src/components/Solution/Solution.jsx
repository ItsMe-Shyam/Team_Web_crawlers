import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Solution.css";
import data from "../Test/mentalIssues";
import { useEffect } from "react";

let timer;
const Solution = () => {
  const { type } = useParams();
  const [text, setText] = useState("");
  let filteredData = data.filter((item) => item.type === type)[0];
  let filteredSolution = filteredData.solution;
  useEffect(() => {
    let i = -1;
    timer = setInterval(() => {
      i++;
      if (i === filteredSolution.length - 1) clearInterval(timer);
      setText((prev) => prev + filteredSolution[i]);
    }, 40);
  }, []);

  return (
    <div className="solutionContainer">
      <audio src="./BinauralMusic/backgroundMusic.mpeg" alt="backgroundMusic"></audio>
      <h1>What Bhagwat Gita says - </h1>
      <p>{text}</p>
      <h1>Recommended Yogasanas - </h1>
      <div className="asanasContainer">
          {filteredData.asanas.map((asana,i) => (
            <div key={i}>
              <img src={asana.link} alt="asana" />
              <p>{asana.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Solution;
