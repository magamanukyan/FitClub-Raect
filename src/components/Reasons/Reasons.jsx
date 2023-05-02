import image1 from "../../assets/image-5.png";
import image2 from "../../assets/image6.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import nike from "../../assets/nike.png";
import adidas from "../../assets/adidas.png";
import tick from "../../assets/tick.png";

import "./Reasons.css";

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right-r">
        <span className="reason"> Reasons </span>
        <div>
          <span className="stroke-text">Why </span>
          <span>choose us?</span>
        </div>
        <div className="details-r">
          <div>
            <img src={tick} alt="tick"></img>
            <span>OVER 50+ EXPERT COACHS</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <span className="details-r-partners">OUR PARTNERS</span>
        <div className="partners">
          <img src={nike} alt="nike" />
          <img src={adidas} alt="adidas" />
          <img src={nb} alt="nb" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
