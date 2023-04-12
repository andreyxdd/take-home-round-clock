import React from 'react';
import useClock from '../../hooks/useClock';
import './styles.scss';
import HalfCircle from '../HalfCircle';

function App() {
  const clock = useClock();
  console.log(clock);
  return (
    <div className="container">
      <div className="clock">
        <HalfCircle side="top" bottomColor="#F8A3A8" topColor="white" />
        <HalfCircle side="bottom" bottomColor="#F8A3A8" topColor="white" />
      </div>
    </div>
  );
}

export default App;
