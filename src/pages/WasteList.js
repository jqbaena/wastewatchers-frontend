import React, { Component } from 'react';
import WasteService from '../services/WasteService';
import WasteCard from '../components/WasteCard';


class WasteList extends Component {

  state = {
    waste: [],
    error: false,
    isLoading: true,
    message: 0
  }

  componentDidMount () {
    WasteService.getAllWaste()
      .then((waste) => {
        this.setState({
          waste,
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

  handleAddWaste = (id, amount) =>{
    const newHistory = {
      amount: amount,
      day: new Date(),
      wastes: id
    };
    WasteService.AddWaste(newHistory)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
    })
  }


  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>
    }
    if (this.state.waste.length === 0) {
      return <div>there is no waste</div>
    }
    if (this.state.error) {
      return <div>error on the connection</div>
    }
    return (
      <div>
        <ul>
          {this.state.waste.map((waste) => {
            return <div className="box" key = {waste._id}>
            <WasteCard waste={waste} onSelect = {this.handleAddWaste}/>
            </div>
          })}
        </ul>
      </div>
    );
  }
}

export default WasteList;
