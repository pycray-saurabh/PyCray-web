import React, { useState, useEffect } from "react";
import "../styles/About.css";
import aboutpic from "../assets/team_banner.svg";
import aboutcard from "../assets/aboutuscard.svg";
import profilepic1 from "../assets/profilepic1.svg";
import nextIcon from "../assets/nextIcon.png";
import createTeam from "../assets/TeamCreate.png";
import rahulDasCEO from "../assets/rahul_das_ceo.jpg";
import saurabhKumarCTO from "../assets/saurabh_kumar_cto.jpg";
import maheshSangadeCOO from "../assets/mahesh_sangade_coo.png";
import instaIcon from "../assets/team-mem-insta-icon.png";
import threadIcon from "../assets/team-mem-thread-icon.png";
import facebookIcon from "../assets/team-mem-facebook-icon.png";

const Teams = () => {
  const teamMembers = [
    {
      "profile_photo": rahulDasCEO,
      "name": "Rahul Das",
      "designation": "CEO",
      "description": "IIM Udaipur, 7+ years of IT products development and testing.",
      "social_media": {
        "facebook": "",
        "insta": "",
        "thread": ""
      }
    },
    {
      "profile_photo": saurabhKumarCTO,
      "name": "Saurabh Kumar",
      "designation": "CTO",
      "description": "Tech leader with 7+ years of experience across tech stacks.",
      "social_media": {
        "facebook": "",
        "insta": "",
        "thread": ""
      }
    },
    {
      "profile_photo": maheshSangadeCOO,
      "name": "Mahesh Sangade",
      "designation": "COO",
      "description": "IIM Ahmedabad, IIT Guwahati, Project management excellence of 8+ years.",
      "social_media": {
        "facebook": "",
        "insta": "",
        "thread": ""
      }
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerRow, setItemsPerRow] = useState(3);

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width <= 600) {
        setItemsPerRow(2);
      } else {
        setItemsPerRow(3);
      } 
    };

    updateScreenSize();

    window.addEventListener('resize', updateScreenSize);

    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  const nextItems = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerRow >= teamMembers.length
        ? 0
        : teamMembers.length - (prevIndex + itemsPerRow) > itemsPerRow 
        ? prevIndex + itemsPerRow 
        : teamMembers.length - itemsPerRow
    );
  };

  const openSocialMedia = (social_media_link) => {
    if(social_media_link != "") {
      window.open(social_media_link);
    }
  }

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
            {teamMembers.slice(currentIndex, currentIndex + itemsPerRow).map((members, index) => {
              return (
                <div className="memberCard">
                  <div class="card-img">
                    <img src={members.profile_photo} alt="team-member" />
                  </div>
                  <div className="card-content">
                    <h2>{members.name}</h2>
                    <h3>{members.designation}</h3>
                    <p>{members.description}</p>
                    <div className="socialMediaIcons">
                      <img className="socialMediaButton facebookButton" src={facebookIcon} alt="facebook" onClick={() => { openSocialMedia(members.social_media.facebook) }} />
                      <img className="socialMediaButton threadButton" src={threadIcon} alt="thread" onClick={() => { openSocialMedia(members.social_media.thread) }} />
                      <img className="socialMediaButton instaButton" src={instaIcon} alt="instagram" onClick={() => { openSocialMedia(members.social_media.insta) }} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <img className="nextButton" src={nextIcon} alt="next" onClick={nextItems} />
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
