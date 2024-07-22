import "bootstrap/dist/css/bootstrap.min.css";
import HeadShot from "../images/headShot.JPG";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="container-fluid app-wrapper no-margin">
      <div className="row padding">
        <div className="col md-5">
          <img src={HeadShot} alt="" className="small-image" />
        </div>
        <div className="col md-5 text-center content-center">
          <h1>
            Hello! <br />
            I'm Izaiah Caston
          </h1>
          <nav>
            <NavLink to="/about"> About</NavLink>
            <NavLink to="/contact"> Contact</NavLink>
            <NavLink to="/work"> Work</NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Home;
