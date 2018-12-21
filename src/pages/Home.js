import React, { Component } from 'react';
import '../css/style.css';


class Home extends Component {
  render() {
    return (
      <div>
        <div class="home">
          <img class="homeimg" src="https://www.footprintcalculator.org/images/tree10.png" alt="tree"/>
        </div>
        <div class="buttons">
          <a className="button-login" href="/login">Login</a>
          <a className="button-login" href="/signup">Signup</a>
        </div>
      </div>
    );
  }
}

export default Home;