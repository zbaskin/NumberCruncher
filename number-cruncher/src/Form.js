import React, { Component } from 'react';
  
class Form extends Component {
    render() {
      return (
        <div className="number-cruncher">
            <h1 className="title">Number Cruncher</h1>
            <form className="form">
                <label htmlFor="array">Number Array: </label>
                <textarea type="text" id="array" name="array" /><br /><br />
                <label htmlFor="target">Target: </label>
                <input type="text" id="target" name="target" /><br /><br />
                <input type="button" onClick={this.props.onClick} value="Submit" />
            </form>
        </div>
      );
    }
}

export default Form;