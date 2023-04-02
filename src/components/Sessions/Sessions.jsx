import React from "react";
import "./Sessions.css";
import AmoghLila from "./images/amoghLilaPrabhu.jpg";
import radheShyam from "./images/radheShyam.jpg";
import neelmani from "./images/neelmani.jpeg";
import gorGopalDas from "./images/gorGopalDas.jpeg";
import gaurangDas from "./images/gaurangDas.jpeg";

const Skills = () => {
  return (
    <div className="sessionsContainer">
      <div>
        <img src={AmoghLila} alt="img1" />
        <h1>Amogh Lila Prabhu Ji</h1>
        <p>
        Vice President ISKCON Dwarka, Delhi <br/>
        Motivation Speaker, Guest Speaker at IIM Ahmedabad
        </p>
        <a href="https://calendly.com/shyam88"><button>Book session</button></a>
      </div>
      <div>
        <img src={radheShyam} alt="img2" />
        <h1>RadheShyam Prabhu Ji</h1>
        <p>
        president ISKCON Pune NVCC
        </p>
        <a href="https://calendly.com/shyam88"><button>Book session</button></a>
      </div>
      <div>
        <img src={neelmani} alt="img2" />
        <h1>Neelmani Krishna Prabhu Ji</h1>
        <p>
        Iskcon Youth preacher
        </p>
        <a href="https://calendly.com/shyam88"><button>Book session</button></a>
      </div>
      <div>
        <img src={gorGopalDas} alt="img2" />
        <h1>Gaur Gopal Das Ji</h1>
        <p>
        Motivational Speaker, Author
        </p>
        <a href="https://calendly.com/shyam88"><button>Book session</button></a>
      </div>
      <div>
        <img src={gaurangDas} alt="img1" />
        <h1>Gaurang Das Prabhu Ji</h1>
        <p>
        IIT graduate and worked for the Kirloskars before joining ISKON, Mumbai
        </p>
        <a href="https://calendly.com/shyam88"><button>Book session</button></a>
      </div>
    </div>
  );
};

export default Skills;
