import { useEffect, useState } from "react";
import img from "../images/discount.jpg"

const DiscountBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 14,
    minutes: 28,
    seconds: 38,
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft((prevTime) => {
        const totalSeconds =
          prevTime.days * 86400 +
          prevTime.hours * 3600 +
          prevTime.minutes * 60 +
          prevTime.seconds -
          1;

        if (totalSeconds <= 0) {
          clearInterval(countdown);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor((totalSeconds % 86400) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(countdown); // Cleanup on component unmount
  }, []);

  return (
    <div className="discount-banner">
      <img src={img} alt="discount" />
      <div className="banner-content">
       <div className="banner-text">
       <span>DISCOUNT</span> <br />
        <h2>
          Summer 2019 <br />
        </h2>
        <span className="sale">SALE <strong>50%</strong></span>
       </div>
        <div className="countdown">
          <div className="countdown-item">
            <span>{timeLeft.days}</span>
            <p>Day</p>
          </div>
          <div className="countdown-item">
            <span>{timeLeft.hours}</span>
            <p>Hour</p>
          </div>
          <div className="countdown-item">
            <span>{timeLeft.minutes}</span>
            <p>Min</p>
          </div>
          <div className="countdown-item">
            <span>{timeLeft.seconds}</span>
            <p>Sec</p>
          </div>
        </div>
        <a href="/" className="shop-now">SHOP NOW</a>
        </div>
    </div>
  );
};

export default DiscountBanner;
