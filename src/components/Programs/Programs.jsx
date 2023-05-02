// import { NavLink } from 'react-router-dom';
import {programsData} from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png';
import "./Programs.css";

const Programs = () => {
  return (
    <div className="Programs" id="programs">
      {/* header */}
      <div className="programs__header">
        <span className="stroke-text">Explore our </span>
        <span>Programs </span>
        <span className="stroke-text">to improve you</span>
      </div>
      <div className="program-categories">
        {programsData.map((program)=>(
            <div className="category " key={program.heading}>
                {program.image}
                <span>{program.heading}</span>
                <span>{program.details}</span>
                <div className="join-now">
                    {/* <NavLink to='/'>  */}
                   <button href="#"> Join now </button>
                    <img src={RightArrow} alt="arrow" />
                {/* </NavLink> */}
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
