import React, { useState, useEffect } from "react";
import deals_banner from "../../images/deal_banner.jpg";
import "./deals.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Deals() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const endDate = new Date("2024-12-31T23:59:59"); // Set your deal end date here

    const calculateCountdown = () => {
      const now = new Date().getTime();
      const timeRemaining = endDate - now;

      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    };

    const countdownInterval = setInterval(calculateCountdown, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div className="container">
      <div className="deals">
        <div className="row">
          <div className="col-7">
            <div className="deals_heading">
              <h3>Deals of the Month</h3>
              <span>
                {
                  "Discover the latest fashion with our limited-edition collections – blink and you'll miss the trends! Wrap your loved ones in style with"
                }
                <br />
                our chic Gift Cards.
              </span>
              <div className="countdown">
                <div className="timer">
                  <span className="timer_value">{countdown.days}</span>{" "}
                  <div>Days</div>
                </div>
                <div className="timer">
                  <span className="timer_value">{countdown.hours}</span>
                  <div>Hours</div>
                </div>
                <div className="timer">
                  <span className="timer_value">{countdown.minutes}</span>
                  <div>Mins</div>
                </div>
                <div className="timer">
                  <span className="timer_value">{countdown.seconds}</span>
                  <div>Secs</div>
                </div>
              </div>
              <button className="view_product_btn">
                View All Products
                <ArrowForwardIcon />
              </button>
            </div>
          </div>
          <div className="col-5">
            <div className="deals_banner_img">
              <img src={deals_banner} alt="Deals Banner" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
