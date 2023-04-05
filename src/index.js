import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './context/StateProvider';
import { reducer } from './context/reducer';
import { initialState } from './context/initialState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <StateProvider reducer={reducer} initialState={initialState}>
      <Router>
        <App />
      </Router>
    </StateProvider>





);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
