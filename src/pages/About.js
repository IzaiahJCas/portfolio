import "bootstrap/dist/css/bootstrap.min.css";
import HeadShot from "../images/headShot.JPG";
import { NavLink } from "react-router-dom";
import "./About.css";
import NavBar from "../components/NavBar";
function About() {
  return (
    <div className="container">
      <NavBar />
      <div className="row mb-3 padding-top shadow-container offset-4">
        <h1> About Me</h1>
      </div>

      <div className="row mb-3 shadow-container">
        <h1> Upbringing</h1>
      </div>

      <div className="row mb-3 shadow-container">
        <h1> Education</h1>
      </div>
    </div>
  );
}

export default About;
