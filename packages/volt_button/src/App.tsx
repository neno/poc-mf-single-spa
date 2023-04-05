import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from 'store/store';
import VoltButton from './VoltButton';
import './index.css';

const App = () => (
  <div className='container'>
    <div>Name: volt_button</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <VoltButton />
  </div>
);
ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('app')
);
