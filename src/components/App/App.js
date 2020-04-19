import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage'
import DetailPage from '../DetailPage/DetailPage'
import EditPage from '../EditPage/EditPage'


import './App.css';
import { connect } from 'react-redux'


class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        {/* component routes*/}
        <Router>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/DetailPage' component={DetailPage} />
          <Route exact path='/EditPage' component={EditPage} />

        </Router>
      </div>
    );
  }
}

export default connect()(App);
