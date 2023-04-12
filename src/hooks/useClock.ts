import React from 'react';

const useClock = () => {
  const [clock, setClock] = React.useState(new Date().toLocaleTimeString());

  React.useEffect(() => {
    const id = setInterval(() => {
      setClock(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return clock;
};

export default useClock;
