import React, { useState, useEffect, Fragment } from "react";
import "./Test.css";
import { Link } from "react-router-dom";
import questions from "./questionSet";
import mentalIssues from "./mentalIssues.js";
import Lottie from "lottie-react";
import Happy from "../../happy.json";

const Test = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [scores, setScores] = useState([]);
  const [noIssues, setNoIssues] = useState(true);
  const [results, setResults] = useState(false);
  const [popup, setPopup] = useState(false);
  const [city, setCity] = useState("");

  useEffect(() => {
    const data = window.localStorage.getItem("show_results");
    const no_issues = window.localStorage.getItem("no_issues");
    const scoreData = window.localStorage.getItem("scores");
    setCity(JSON.parse(window.sessionStorage.getItem("user_city")));
    setNoIssues(JSON.parse(no_issues));
    setResults(JSON.parse(data));
    setScores(JSON.parse(scoreData));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("show_results", JSON.stringify(results));
    window.localStorage.setItem("scores", JSON.stringify(scores));
    window.localStorage.setItem("no_issues", JSON.stringify(noIssues));
    window.sessionStorage.setItem("user_city", JSON.stringify(city));
  }, [results, scores, noIssues, city]);

  const handleAnswerSelect = (answer) => {
    setUserAnswers([...userAnswers, answer]);
    if (currentQuestion === questions.length - 1) {
      showResults();
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const calculateScore = () => {
    let ptd = 0;
    let ocd = 0;
    let schizo = 0;
    let adhd = 0;
    let bd = 0;
    let pd = 0;
   
    for (let i = 0; i < questions.length; i++) {
      if (userAnswers[i] === "True") {
        setNoIssues(false);
        if (questions[i].type === "ptd") ptd++;
        else if (questions[i].type === "ocd") ocd++;
        else if (questions[i].type === "schizo") schizo++;
        else if (questions[i].type === "adhd") adhd++;
        else if (questions[i].type === "bd") bd++;
        else if (questions[i].type === "pd") pd++;
      }
    }
    setScores([ptd, ocd, schizo, adhd, bd, pd]);
  };

  const showResults = () => {
    calculateScore();
    setUserAnswers([]);
    setResults(true);
    setCurrentQuestion(0);
  };

  return (
    <Fragment>
      {!results && (
        <div className="testContainer">
          <div className="question">
            <h1>
              Question {currentQuestion + 1}/{questions.length}.
            </h1>
            <h2>{questions[currentQuestion].question}</h2>
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerSelect(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
      {results && (
        <div className="resultsContainerParent">
          <button
          id="testAgain"
            onClick={(e) => {
              setResults(false);
              setNoIssues(true);
            }}
          >
            Test Again
          </button>
          {results && noIssues && (
            <div className="positiveNews">
              <div className="animation">
                <Lottie loop={true} animationData={Happy} />
              </div>
              <h1>Congratulations, You are completely fine!</h1>
              <p>
                Everyone has some bad experiences in life, but time heals
                everything, cheers!
              </p>
            </div>
          )}
          {results && !noIssues && (
            <div className="resultsContainer">
              {mentalIssues.map(
                (item, index) =>
                  scores[index] > 0 && (
                    <div key={index} className="resultCard">
                      <h1>{Math.floor((scores[index] / item.totalQuestions) * 100)}% symptoms</h1>
                      <h2>{item.type}</h2>
                      <p>{item.description}</p>
                      <div className="solutionLinks">
                        <h1>Solutions - </h1>
                        <Link to={`/solution/${item.type}`}>
                          <button>Spiritual Way</button>
                        </Link>
                        <br />
                        <a href={ city ? `https://justdial.com/${city}/${item.type}` : "#testAgain"} target={city && "_blank"}>
                          <button
                            onClick={(e) => {
                              if (!city) {
                                setPopup(true);

                              }
                            }}
                          >
                            Recommended Therapists
                          </button>
                        </a>
                      </div>
                    </div>
                  )
              )}
            </div>
          )}
        </div>
      )}
      {popup && (
        <div className="popupContainer">
          <div>
            <h1 onClick={(e) => setPopup(false)}>X</h1> <br/>
            <input
              onChange={(e) => setCity(e.target.value)}
              type="text"
              placeholder="Enter your city"
            />{" "}
            <br />
            <a href={`https://www.justdial.com/${city}/therapists`} target="_blank">
              <button
                onClick={(e) => {
                  setPopup(false);
                }}
              >
                Enter
              </button>
            </a>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Test;
