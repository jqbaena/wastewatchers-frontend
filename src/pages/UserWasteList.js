import React, { Component } from 'react';
import WasteService from '../services/WasteService';
import '../css/style.css';



class UserWasteList extends Component {

  state = {
    wastesHistory: [],
    error: false,
    isLoading: true,
    message: ''
  }

  componentDidMount () {
    WasteService.getUserWaste()
      .then((wastesHistory) => {
        console.log('wastes', wastesHistory.wastes)
        this.setState({
          wastesHistory: wastesHistory.wastes,
          isLoading: false
        })
      })
      .catch((error) => {
        this.setState({
          error,
        })
      })
  }

  componentWillUnmount() {
    console.log("componentWillUnmount")
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>
    }
    if (this.state.wastesHistory.length === 0) {
      return <div>there is no waste</div>
    }
    if (this.state.error) {
      return <div>error on the connection</div>
    }
    return ( this.state.wastesHistory.map((waste) => {
      return <div className="box" key = {waste._id}>
         <div><article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={waste.kind.imgURL} alt="waste" width="64" height="64"/>
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{waste.kind.name}</strong>
                </p>
                <p> Day: <small>{waste.day}</small>
                </p>
                <p>
                    Amount: <small>{waste.amount}</small>
                </p>

              </div>
            </div>
            </article>      
            </div>
      </div>
    })
    )
  }
}

export default UserWasteList;
