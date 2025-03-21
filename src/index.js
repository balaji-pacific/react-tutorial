import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import StateExample from './component/StateExample';
import StateComponent from './component/StateComponent';
import StateWithObject from './component/StateWithObject';
import StateArray from './component/StateArray';
import Timer from './component/Timer';
import FormsLearning from './component/FormsLearning';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <StateExample />
    <StateComponent/>
    <StateWithObject/>
    <StateArray/>
    <Timer/>
    <FormsLearning/>
 </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
