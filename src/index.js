import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Rates from './Rates';
import Navbar from './Navbar';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 


ReactDOM.render(
  <Router>
          <Navbar />
          <Switch>
            <Route exact path="/"  component= {App}/>
            <Route exact path="/Rates" component={Rates}/>
          </Switch> 
      </Router>,
  document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
