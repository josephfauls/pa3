import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import data from './data/data'
import pekoraData from './data/pekora'
import koroneData from './data/korone'
import hachaamaData from './data/haachama'

ReactDOM.render(
  <React.StrictMode>
    <App data={data} pekora={pekoraData} korone={koroneData} haachama={hachaamaData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
