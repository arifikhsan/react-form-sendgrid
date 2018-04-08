import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            fName: '',
            lName: '',
            address: '',
            phone: '',

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (event) {
        this.setState({
            inputtedValue: event.target.value
        });
    }

    handleSubmit (event) {
        console.log('Form value: ' + this.state.inputtedValue);
        event.preventDefault();
    }
  render() {
    return (
      <div className="App">
          <h2>Register Here To Get Your Free Jones Discount</h2>
          <p>Welcome to the new and beautiful world of distributed risk and insurance</p>
          <hr/>

          <form onSubmit={this.handleSubmit} />

          <label>First Name: </label>
          <input type="text" value={this.state.fName} onChange={this.handleChange}/>
          <br/>

          <label>Last Name: </label>
          <input type="text" value={this.state.fName} onChange={this.handleChange}/>
          <br/>

          <input type="button" value="Submit"/>
      </div>
    );
  }
}

export default App;
