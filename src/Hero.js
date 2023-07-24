import { Link } from "react-scroll";
import hero from "./images/cars/hero.jpg";
import Reveal from "./Reveal";
const Hero = () => {
  return (
    <div className="section hero" id="home">
      <div className="hero-container">
        <div className="text">
          <h1>
            <Reveal>
              Looking for a car to rent<span>?</span>
            </Reveal>
          </h1>
          <Reveal>
            <p>Your will find the best quality cars and with a fair price.</p>
          </Reveal>
          <Reveal>
            <button className="btn">
              <Link to="cars">Select a Car</Link>
            </button>
          </Reveal>
        </div>
        <div className="img">
          <img src={hero} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Hero;
