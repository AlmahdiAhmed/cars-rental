import { AiOutlineHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { PiCarSimpleLight } from "react-icons/pi";
const Contact = () => {
  return (
    <div className="section contact">
      <div className="contact-container">
        <div className="links">
          <div className="link">
            <AiOutlineHome />
            <a href="#home">Home</a>
          </div>
          <div className="link">
            <FcAbout />

            <a href="#about">About</a>
          </div>
          <div className="link">
            <PiCarSimpleLight />
            <a href="#cars">Cars</a>
          </div>
        </div>
        <div className="contact-us">
          <h2>Leave us a message</h2>
          <form>
            <input type="email" placeholder="Please enter you e-mail" />
            <input
              type="text"
              placeholder="Write your message"
              className="message"
            />
            <button>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
