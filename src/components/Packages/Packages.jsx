import {plansData} from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png'
import "./Packages.css";
const Packages = () => {
  return (
    <div className="packages__container" id='packages'>
      <div className="blur packages__blur-1"></div>
      <div className="blur packages__blur-2"></div>
      <div className="programs__header" style={{gap:'2rem'}}>
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITH US</span>
      </div>
    {/* package card */}
    <div className="packages">
    {plansData.map((plan, i)=>(
        <div key = {i} className="plan">
            {plan.icon}
            <span>{plan.name}</span>
            <span>{plan.price} Dram </span>
            <div className="features">
                {plan.features.map((feature, i)=>(
                    <div key={i} className="feature">
                        <img src={whiteTick} alt="tick" />
                        <span key={i}>{feature}</span>
                    </div>
                ))}
            </div>
            <div><a className='feature-link' href="/">See more benefits -&gt;</a></div>
            <button className="btn">Join now </button>
        </div>
    ))}
    </div>
    </div>
  );
};

export default Packages;
