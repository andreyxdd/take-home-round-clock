import React from 'react';
import './styles.scss';
import useClock from '../../hooks/useClock';
import HalfCircle from '../HalfCircle';
import { range } from '../../utils';

const clockNumbers = range({ from: 1, to: 12 });

function Clock() {
  const { secondsHandRef, minutesHandRef, hoursHandRef } = useClock();

  return (
    <div className="container">
      <div className="clock">
        <div className="circle-halves">
          <HalfCircle side="top" bottomColor="pink" topColor="white" />
          <HalfCircle side="bottom" bottomColor="pink" topColor="white" />
        </div>
        {clockNumbers.map((number) => (
          <div className="numbers" key={number}>
            <div>{number}</div>
          </div>
        ))}
        <div className="hand" id="sec-hand" ref={secondsHandRef}>
          <div className="sec" />
        </div>
        <div className="hand" id="min-hand" ref={minutesHandRef}>
          <div className="min" />
        </div>
        <div className="hand" id="hour-hand" ref={hoursHandRef}>
          <div className="hour" />
        </div>
      </div>
    </div>
  );
}

export default Clock;
