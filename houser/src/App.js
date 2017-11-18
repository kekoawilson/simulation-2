import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {  } from './ducks/reducer'
import './App.css';
import './reset.css';
import Header from './components/Header/Header';
import StepOne from './components/Wizard/StepOne/StepOne';
import Login from './components/Auth/Auth';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Login/>
      <Header/>
      <StepOne/>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return state
// } remember to connect the functions you import.

export default App;
