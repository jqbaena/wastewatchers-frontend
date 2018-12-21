import React, { Component } from 'react';

class WasteCard extends Component {

    state = {
        amount: 0
    }

    handleAmountInput = (event) => {
        let value =  event.target.value;
        if(value < 0){
            value = 0;
        }
        this.setState({
          amount: value
        })
    }

    render() {
        const {waste} = this.props;
        return (
            <div><article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={waste.imgURL} alt="waste" width="64" height="64"/>
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{waste.name}</strong> <br />
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    type="number" 
                    value={this.state.amount}
                  onChange={(e) => this.handleAmountInput(e)}/>
                </div>
                <div className="control">
                  <button className="button is-info" onClick={()=>{
                    this.props.onSelect(waste._id, this.state.amount)
                  }}>
                    ADD WASTE
                  </button>
                </div>
              </div>
            </div>
            </article>      
            </div>
        );
    }
}

export default WasteCard;