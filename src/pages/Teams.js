import React from "react";
import "../styles/About.css";
import aboutpic from "../assets/team_banner.svg";
import aboutcard from "../assets/aboutuscard.svg";
import profilepic1 from "../assets/profilepic1.svg";
import createTeam from "../assets/TeamCreate.png";

const Teams = () => {
  return (
    <div className="aboutpage">
      <div className="aboutsec">
        <img className="aboutpic teamPic" alt="aspic" src={aboutpic} />
        <div className="whiterect whiterectTeam">
          <div className="aboutustext">Our Team </div>
          {/* <div className="homeandabout">Home / Team</div> */}
        </div>
      </div>

      <div className="wrapper_teamCreative">
        <div className="teamMarginManage">
          <div className="teamCreative">
            <div className="teamCreateFirst">
              <h2>
                We Are <br />{" "}
                <span style={{ color: "#000" }}>
                  Creative <br /> Team
                </span>{" "}
              </h2>
            </div>
            <div className="teamCreateSecond">
              <img className="" alt="aspic" src={createTeam} />
            </div>
          </div>
          <p>
            Our team of experienced professionals takes the time to understand
            your unique ideas and then skillfully transforms them into fully
            functional products. From the start to the finish, we use the best
            methods and tools to ensure that the end result meets all your
            requirements.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Teams;

// import React from 'react'

// function Teams() {
//   return (
//     <div>
//      <p className="body" style={{fontSize:"50px", color: "#000"}}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et doloreLorem ipsum dolor sit
//             amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
//             ut labore et doloreLorem ipsum dolor sit amet, consectetur
//             adipiscing elit, sed do eiusmod tempor incididunt ut labore et
//             doloreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//             do eiusmod tempor incididunt ut labore et doloreLorem ipsum dolor
//             sit amet, consectetur adipiscing elit, sed do eiusmod tempor
//             incididunt ut labore et doloreLorem ipsum dolor sit amet,
//             consectetur adipiscing
//           </p>
//     </div>
//   )
// }

// export default Teams
