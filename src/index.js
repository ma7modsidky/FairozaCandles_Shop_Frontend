import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Context from "./context/Context";
import { BrowserRouter as Router} from "react-router-dom";
import "@themesberg/flowbite";
ReactDOM.render(
  <Context>
    <Router basename='/'>
      <App />
    </Router>
  </Context>
  ,
  document.getElementById('root')
);


