import React from 'react';
import './styles.scss';

type Props = {
  side: 'top' | 'bottom';
  topColor: string;
  bottomColor: string;
}

function HalfCircle({ side, topColor, bottomColor }: Props) {
  return (
    <div
      className="half-circle"
      style={{
        background: `linear-gradient(${topColor}, ${bottomColor})`,
        transform: side === 'bottom' ? 'rotate(180deg)' : '',
      }}
    />
  );
}

export default HalfCircle;
