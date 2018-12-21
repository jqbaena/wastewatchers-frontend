import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';
class Private extends Component {
  render() {
    
    return (
      <div>
        <div class="home">
          <img class="homeimg" src="https://free3d.com/imgd/l12/5afef15d26be8bf2748b4567/3003-low-poly-trees.png" alt="tree"/>
        </div>
      </div>
    )
  }
}

export default withAuth(Private);
