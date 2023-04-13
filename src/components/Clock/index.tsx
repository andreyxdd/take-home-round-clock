/* eslint-disable no-param-reassign */
import React from 'react';
import './styles.scss';
import useClock from '../../hooks/useClock';
import HalfCircle from '../HalfCircle';
import { range } from '../../utils';
import Hand from '../Hand';

const clockNumbers = range({ from: 1, to: 12 });

function Clock() {
  const datetime = useClock();

  return (
    <div className="container">
      <div className="clock">
        {clockNumbers.map((number) => (
          <div className="numbers" key={number}>
            <div>{number}</div>
          </div>
        ))}
        <div className="dot" />
        <div className="circle-halves">
          <HalfCircle side="top" bottomColor="#49485c" topColor="#282828" />
          <HalfCircle side="bottom" bottomColor="#49485c" topColor="#282828" />
        </div>
        <Hand type="seconds" date={datetime} />
        <Hand type="minutes" date={datetime} />
        <Hand type="hours" date={datetime} />
      </div>
    </div>
  );
}

export default Clock;
