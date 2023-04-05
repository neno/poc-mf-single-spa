import React from 'react';
import ReactDOM from 'react-dom';

import { StoreProvider, useStore } from 'store/store';
import VoltButton from 'volt_button/VoltButton';
import './index.css';

const App = () => {
  const { count, clear } = useStore();
  return (
    <div className='container'>
      <header className='header'>
        <h1 className='heading'>Host</h1>
      </header>

      <main className='main'>
        <p className='sub-heading'>State is shared by Host and Component(s)</p>
        <div className='counter'>
          <span>Counter: {count}</span>
        </div>
        <div className='buttons'>
          <VoltButton />
          <button onClick={clear}>Clear counter from Host</button>
        </div>
      </main>
    </div>
  );
};
ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('app')
);
