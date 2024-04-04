import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Appcopy from './Appcopy'
import reportWebVitals from './reportWebVitals';

// const element = <nav>
//                     <h1>Hello</h1>
//                     <ul>
//                         <li>tran</li>
//                         <li>co</li>
//                         <li>tam</li>
//                     </ul>
//                 </nav>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Appcopy />
  </React.StrictMode>
  // element
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
