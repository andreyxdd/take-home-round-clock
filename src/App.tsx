import React from 'react';
import useClock from './hooks/useClock';

function App() {
  const clock = useClock();
  return (
    <div>
      Round clock:
      {' '}
      {clock}
    </div>
  );
}

export default App;
