import about from "./images/cars/about.jpg";
import seat from "./images/senior-man-driving-a-car-svgrepo-com.svg";
import gas from "./images/icons8-gas-station-50.png";
import wheel from "./images/icons8-wheel-50.png";
const About = () => {
  return (
    <div id="about" className="section about">
      <div className="about-container">
        <div className="text">
          <h4>About us</h4>
          <h2>
            Why us <span>?</span>
          </h2>
          <p>
            We committee to provide you safe and comfortable rides{" "}
            <span>.</span>
          </p>
          <div className="icons">
            <div className="icon">
              <img src={seat} alt="seat-belt" />
              <p>Safe cars with high maintenance</p>
            </div>
            <div className="icon">
              <img src={gas} alt="gas station" />
              <p>Full gas tank. Don't bother</p>
            </div>
            <div className="icon">
              <img src={wheel} alt="wheel" />
              <p>High quality tires</p>
            </div>
          </div>
        </div>
        <div className="img">
          <img src={about} alt="about us" />
        </div>
      </div>
    </div>
  );
};
export default About;
