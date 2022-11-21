import { useEffect, useState } from 'react';

export const useTimer = (time) => {
  const [timer, setTimer] = useState(null);
  const [remTime, setRemTime] = useState(`${time > 9 ? time : '0' + time}:00`);
  const [isFinished, setIsFinished] = useState(false);
  let minutes = time;
  let seconds = 0;

  const editTime = () => {
    if (seconds === 0) {
      minutes -= 1;
      seconds = 59;
    } else {
      seconds -= 1;
    }
    const visibleMinutes = minutes > 9 ? minutes : '0' + minutes;
    const visibleSeconds = seconds > 9 ? seconds : '0' + seconds;
    setRemTime(`${visibleMinutes}:${visibleSeconds}`);
  };

  useEffect(() => {
    setTimer(
      setInterval(() => {
        if (minutes === 0 && seconds === 0) {
          clearInterval(timer);
          setIsFinished(true);
        } else {
          editTime();
        }
      }, 1000),
    );
  }, []);

  return {
    time: remTime,
    isFinished,
    timer,
  };
};
