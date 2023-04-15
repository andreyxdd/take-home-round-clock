/* eslint-disable no-param-reassign */
import React from 'react';
import './styles.scss';
import useClock from '../../hooks/useClock';

type HandType = 'seconds' | 'minutes' | 'hours';

type Props = {
  type: HandType;
};

function getTimeDegrees(type: HandType, date: Date) {
  switch (type) {
    case 'seconds':
      return date.getSeconds() * 6;
    case 'minutes':
      return date.getMinutes() * 6; // + date.getSeconds() / 2;
    default: // "hours"
      return date.getHours() * 30 + date.getMinutes() / 2;
  }
}

function Hand({ type }: Props) {
  const datetime = useClock();

  const ref = React.useCallback((node: HTMLDivElement | null) => {
    if (node) {
      node.style.transform = `rotate(${getTimeDegrees(type, datetime)}deg)`;
    }
  }, [type, datetime]);

  return (
    <div className="hand" ref={ref}>
      <div className={type} />
    </div>
  );
}

export default Hand;
