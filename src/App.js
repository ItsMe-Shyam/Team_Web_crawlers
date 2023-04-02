import "./App.css";
import Helmet from "react-helmet";
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/Home/Home.jsx";
import Sessions from "./components/Sessions/Sessions.jsx";
import Player from './components/musicPlayer/Music';
import Solution from './components/Solution/Solution.jsx';
import Test from "./components/Test/Test.jsx";
import About from "./components/About/About.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Helmet title="Mind Doc" />
      <Navbar />
      {/* <Router> */}
      <Routes>
        <Route exact path="/test" Component={Test} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/solution/:type" Component={Solution} />
        <Route exact path="/music" Component={Player} />
        <Route exact path="/sessions" Component={Sessions} />
        <Route exact path="/" Component={Home} />
      </Routes>
      {/* </Router> */}
    </Fragment>
  );
}

export default App;
