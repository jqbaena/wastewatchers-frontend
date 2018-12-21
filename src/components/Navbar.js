import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';
import '../css/style.css';

class Navbar extends Component {

 

  renderIsLoggedIn = () => {
    return <div >
      <div className='container'>
        <div className='navbar'>
          <ul>
            <li><Link className="active" to="/challenge/waste">Waste</Link></li>
            <li><Link to="/challenge/waste/add">Add waste</Link></li>
            <li><span onClick={this.props.logout}> Log out</span></li>
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