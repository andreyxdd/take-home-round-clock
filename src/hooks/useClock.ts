import React from 'react';

const INTERVAL = 1000;

/**
 * Hook to update the datetime state every second
 */
const useClock = () => {
  const [date, setDate] = React.useState(new Date());

  React.useEffect(() => {
    const id = setInterval(() => setDate(new Date()), INTERVAL);
    return () => clearInterval(id);
  }, []);

  return date;
};

export default useClock;
