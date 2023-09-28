import React from "react";
import "../styles/About.css";
import aboutpic from "../assets/team_banner.svg";
import aboutcard from "../assets/aboutuscard.svg";
import profilepic1 from "../assets/profilepic1.svg";
import createTeam from "../assets/TeamCreate.png";
import memberImage from "../assets/member-img.png";
import instaIcon from "../assets/team-mem-insta-icon.png";
import threadIcon from "../assets/team-mem-thread-icon.png";
import facebookIcon from "../assets/team-mem-facebook-icon.png";

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
      <div className="meetTheTeamBox">
        <div className="meetTheTeam">
          <h2><span style={{ color: "#000" }}>Meet The{" "}</span>Team</h2>
          <svg className="meetTheTeamUnderline" width="73" height="7" viewBox="0 0 73 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="73" height="7" rx="2" fill="#0C67B4" />
          </svg>
        </div>

        <div className="teamMemberSection">
        <div className="blueBackground"></div>
        <div className="teamCardsBox">
          <div className="memberCard">
            <div class="card-img">
              <img src={memberImage} alt="team-member" />
            </div>
            <div className="card-content">
              <h2>Name</h2>
              <h3>Designation</h3>
              <p>NamLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
              <div className="socialMediaIcons">
                <img style={{width: "28px", height: "28px"}} src={facebookIcon} alt="facebook" />
                <img style={{width: "20px", height: "20px", margin: "0vw 2vw"}} src={threadIcon} alt="thread" />
                <img style={{width: "23px", height: "23px"}} src={instaIcon} alt="instagram" />
              </div>
            </div>
          </div>

          <div className="memberCard d-none">
            <div class="card-img">
              <img src={memberImage} alt="team-member" />
            </div>
            <div className="card-content">
              <h2>Name</h2>
              <h3>Designation</h3>
              <p>NamLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
              <div className="socialMediaIcons">
                <img style={{width: "28px", height: "28px"}} src={facebookIcon} alt="facebook" />
                <img style={{width: "20px", height: "20px", margin: "0vw 2vw"}} src={threadIcon} alt="thread" />
                <img style={{width: "23px", height: "23px"}} src={instaIcon} alt="instagram" />
              </div>
            </div>
          </div>

          <div className="memberCard">
            <div class="card-img">
              <img src={memberImage} alt="team-member" />
            </div>
            <div className="card-content">
              <h2>Name</h2>
              <h3>Designation</h3>
              <p>NamLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
              <div className="socialMediaIcons">
                <img style={{width: "28px", height: "28px"}} src={facebookIcon} alt="facebook" />
                <img style={{width: "20px", height: "20px", margin: "0vw 2vw"}} src={threadIcon} alt="thread" />
                <img style={{width: "23px", height: "23px"}} src={instaIcon} alt="instagram" />
              </div>
            </div>
          </div>
        </div>
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
