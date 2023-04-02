import React, {useState} from "react";
import "./Home.css";
import Panda from "../../panda.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

const About = () => {
  const [category, setCategory] = useState('');
  return (
    <div id="about" className="about-container">
      <div className="girlAnimation">
        <Lottie animationData={Panda} loop={true} />
      </div>
      <h1>MIND DOC</h1>
      <div className="categorySelector">
        <select onChange={e => setCategory(e.target.value)} name="" id="">  
          <option value="">-- Select a disorder --</option>
          <option value="Post Traumatic Disorder">Post Traumatic Disorder</option>
          <option value="Obsessive Complusive Disorder">Obsessive Complusive Disorder</option>
          <option value="Schizophrenia">Schizophrenia</option>
          <option value="Attention-deficit hyperactivity disorder">Attention-deficit hyperactivity disorde</option>
          <option value="Bipolar Disorder">Bipolar Disorder</option>
          <option value="Personality Disorder">Personality Disorder</option>
        </select> 
        <Link to={`/solution/${category}`}><button disabled={!category && true}>Solution</button></Link>
      </div>
      <p>
        <span>Don't Know yet? Test your Mental state <Link to="/test"><button>TEST NOW</button></Link></span> <br/>
        Your mind's best buddy to look after your mental health, anywhere you go!
      </p>
    </div>
  );
};

export default About;
