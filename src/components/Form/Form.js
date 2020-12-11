import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  render() {
    return (
      <div className="Form">
        <div className="Input">
          <h1 className="head">Login</h1>
          <form>
            <input 
              type="text" 
              placeholder="Enter your email" 
              className="form-input"
              autoComplete="off" />
            <input 
              type="password" 
              placeholder="Password" 
              className="form-input"
              autoComplete="new-password" />
            <button type="submit" 
              className="button">
                login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Form;