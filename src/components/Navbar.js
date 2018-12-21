import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';
import '../css/style.css';

class Navbar extends Component {

  renderIsLoggedIn = () => {
    return <div >
      <div class='container'>
        <div class='navbar'>
          <ul>
            <li><a class="active" href="/challenge/waste">Waste</a></li>
            <li><a href="/challenge/waste/add">Add waste</a></li>
            <li><a href="/" onClick={this.props.logout}> Log out</a></li>
          </ul>
        </div>
      </div>
    </div>
  }
 
  renderIsNotLoggedIn = () => {
    return <div>
    </div>
  }

  render() {
    return (
      <div>
        { this.props.isLogged ? this.renderIsLoggedIn() : this.renderIsNotLoggedIn() }
      </div>
    )
  }
}

export default withAuth(Navbar);