import React from 'react';

/**
 * Hooks to control the position of clock hands, which are represented by div elemnts
 */
const useClock = () => {
  const secondsHandRef = React.useRef<HTMLDivElement | null>(null);
  const minutesHandRef = React.useRef<HTMLDivElement | null>(null);
  const hoursHandRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const id = setInterval(() => {
      const date = new Date();
      const seconds = date.getSeconds() / 60;
      const minuntes = (date.getMinutes() + seconds) / 60;
      const hours = (date.getHours() + minuntes) / 12;
      if (secondsHandRef.current && minutesHandRef.current && hoursHandRef.current) {
        secondsHandRef.current.style.transform = `rotate(${seconds * 360}deg)`;
        minutesHandRef.current.style.transform = `rotate(${minuntes * 360}deg)`;
        hoursHandRef.current.style.transform = `rotate(${hours * 360}deg)`;
      }
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return { secondsHandRef, minutesHandRef, hoursHandRef };
};

export default useClock;
