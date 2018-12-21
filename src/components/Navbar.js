import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';
import '../css/style.css';

class Navbar extends Component {

 

  renderIsLoggedIn = () => {
    console.log(this.props);
    return <div >
      <div className='container'>
        <div className='navbar'>
          <ul>
            <li><a className="active" href="/challenge/waste">Waste</a></li>
            <li><a href="/challenge/waste/add">Add waste</a></li>
            <li><a href="/" onClick={this.props.logout}> Log out</a></li>
          </ul>
        </div>
      </div>
    </div>
  }
 
  renderIsNotLoggedIn = () => {
    console.log(this.props);
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