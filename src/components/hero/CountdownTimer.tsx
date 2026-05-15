import { useEffect, useState } from "react";
import { couple } from "../../config/couple";
import { getTimeRemaining } from "../../utils/getTimeRemaining";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const time = getTimeRemaining(couple.weddingDate);

    return {
      days: time.days,
      hours: time.hours,
      minutes: time.minutes,
      seconds: time.seconds,
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">
      <div className="countdown-item">
        <span>{timeLeft.days}</span>
        <p>Days</p>
      </div>

      <div className="countdown-item">
        <span>{timeLeft.hours}</span>
        <p>Hours</p>
      </div>

      <div className="countdown-item">
        <span>{timeLeft.minutes}</span>
        <p>Minutes</p>
      </div>

      <div className="countdown-item">
        <span>{timeLeft.seconds}</span>
        <p>Seconds</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
