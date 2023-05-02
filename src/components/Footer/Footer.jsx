import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer__container" id="footer">
      <hr />
      <div className="footer">
        <div className="social__links"> 
        <img src={Github} alt="Github" />
        <img src={Instagram} alt="Instagram" />
        <img src={Linkedin} alt="Linkedin" />
        </div>
      <div className="logo-f">
        <img src={Logo} alt="logo" />  
        </div>
      </div>
      <div className="blur footer__blur-1"></div>
      <div className="blur footer__blur-2"></div>
    </div>
  );
};

export default Footer;
