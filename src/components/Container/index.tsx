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
        <div className="circle-halves">
          <HalfCircle side="top" bottomColor="pink" topColor="white" />
          <HalfCircle side="bottom" bottomColor="pink" topColor="white" />
        </div>
        <div className="numbers">
          <div>1</div>
        </div>
        <div className="numbers">
          <div>2</div>
        </div>
        <div className="numbers">
          <div>3</div>
        </div>
        <div className="numbers">
          <div>4</div>
        </div>
        <div className="numbers">
          <div>5</div>
        </div>
        <div className="numbers">
          <div>6</div>
        </div>
        <div className="numbers">
          <div>7</div>
        </div>
        <div className="numbers">
          <div>8</div>
        </div>
        <div className="numbers">
          <div>9</div>
        </div>
        <div className="numbers">
          <div>10</div>
        </div>
        <div className="numbers">
          <div>11</div>
        </div>
        <div className="numbers">
          <div>12</div>
        </div>
        <div className="hand" id="sec">
          <div className="sec" />
        </div>
        <div className="hand" id="min">
          <div className="min" />
        </div>
        <div className="hand" id="hour">
          <div className="hour" />
        </div>
      </div>
    </div>
  );
}

export default App;
