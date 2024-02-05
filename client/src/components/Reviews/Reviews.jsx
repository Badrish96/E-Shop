import React from "react";
import "./reviews.css";
import StarIcon from "@mui/icons-material/Star";
import profile_pic1 from "../../images/profile pic1.jpg";
import profile_pic2 from "../../images/profile pic2.jpg";
import profile_pic3 from "../../images/profile pic3.jpg";
import profile_pic4 from "../../images/profile pic 4.jpg";
import profile_pic5 from "../../images/profile pic 5.jpg";
import profile_pic6 from "../../images/profile pic 6.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const data = [
  {
    stars: <StarIcon />,
    review_text:
      "Five Stars: Amazing Quality and Style!I recently purchased a few items from this website, and I couldn't be happier with my choices.",
    profile_pic: profile_pic1,
    username: "Leslie Alexander",
    user_role: "Model",
  },
  {
    stars: <StarIcon />,
    review_text:
      "The variety of clothing options on this site is fantastic! I found some unique pieces that I haven't seen anywhere else.",
    profile_pic: profile_pic2,
    username: "Jacob Jones",
    user_role: "Co-Founder",
  },
  {
    stars: <StarIcon />,
    review_text:
      "The clothes I ordered were okay – not amazing, but not terrible either. My main issue was with the shipping time.",
    profile_pic: profile_pic3,
    username: "Jenny Wilson",
    user_role: "Fashion Designer",
  },
  {
    stars: <StarIcon />,
    review_text:
      "I had an issue with my order, and the customer service team was incredibly responsive and helpful.",
    profile_pic: profile_pic4,
    username: "John Clark",
    user_role: "Designer",
  },
  {
    stars: <StarIcon />,
    review_text:
      "I love the unique styles this website offers. I recently took advantage of a sale.",
    profile_pic: profile_pic5,
    username: "Maya Stone",
    user_role: "Model",
  },
  {
    stars: <StarIcon />,
    review_text:
      "I was a bit skeptical about ordering clothes online, but the sizing guide was accurate, and everything fit perfectly!",
    profile_pic: profile_pic6,
    username: "Martin Grace",
    user_role: "Photographer",
  },
];

function SampleNextArrow(props) {
  // eslint-disable-next-line react/prop-types
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        color: "gray", // Use color property
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      {/* Use ArrowForwardIcon here */}
      <button className="review_arrow">
        <ArrowForwardIcon />
      </button>
    </div>
  );
}

function SamplePrevArrow(props) {
  // eslint-disable-next-line react/prop-types
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        color: "gray", // Use color property
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      {/* Use ArrowBackIcon here */}
      <button className="review_arrow_back">
        <ArrowBackIcon />
      </button>
    </div>
  );
}

export default function Reviews() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="container">
      <div className="review_heading">
        <h3>{"What our Customer say's"}</h3>
      </div>
      <div className="row">
        <Slider {...settings}>
          {data.map((d) => (
            <div className="col-4 card review_card" key={d.username}>
              <div className="review_stars">
                {" "}
                {/* Repeat StarBorderIcon five times */}
                {[...Array(5)].map((_, index) => (
                  <StarIcon key={index} sx={{ color: "#e7d404" }} />
                ))}
              </div>
              <div className="review_text">
                <span>{d.review_text}</span>
              </div>
              <div className="user">
                <div className="user_profile_pic">
                  <img src={d.profile_pic} alt="User Profile Picture" />
                </div>
                <div className="user_info">
                  <span className="username">{d.username}</span>
                  <div>
                    <span className="user_role">{d.user_role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
