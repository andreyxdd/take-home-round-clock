/* eslint-disable no-param-reassign */
import React from 'react';
import './styles.scss';

type HandType = 'seconds' | 'minutes' | 'hours';

type Props = {
  type: HandType;
  date: Date;
};

function getTimeDegrees(type: HandType, date: Date) {
  switch (type) {
    case 'seconds':
      return date.getSeconds() * 6;
    case 'minutes':
      return date.getMinutes() * 6;
    default: // "hours"
      return date.getHours() * 30;
  }
}

function Hand({ type, date }: Props) {
  const ref = React.useCallback((node: HTMLDivElement | null) => {
    if (node !== null) {
      node.style.transform = `rotate(${getTimeDegrees(type, date)}deg)`;
    }
  }, [type, date]);
  return (
    <div className="hand" ref={ref}>
      <div className={type} />
    </div>
  );
}

export default Hand;
