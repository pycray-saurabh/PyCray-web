import React from "react";
import teamBanner from "../assets/teamBanner.png";

const Teams = () => {
  return (
    <div className="aboutpage">
      <div className="aboutsec">
        <img className="aboutpic" alt="aspic" src={teamBanner} />
        <div className="whiterect">
          <div className="aboutustext">ABOUT US</div>
          <div className="homeandabout">Home / About</div>
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
