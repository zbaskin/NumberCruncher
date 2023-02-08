import React, { Component } from 'react';
  
class Form extends Component {
    render() {
      return (
        <div className="form-container">
            <h1 className="title">Number Cruncher</h1>
            <form className="form">
                <label htmlFor="array">Number Array: </label>
                <textarea type="text" id="array" name="array" onChange={this.props.onChange} /><br /><br />
                <label htmlFor="target">Target: </label>
                <input type="text" id="target" name="target" onChange={this.props.onChange} /><br /><br />
                <input type="checkbox" id="unique" name="unique" checked={this.props.uniqueChecked} onChange={this.props.uniqueClick} />
                <label htmlFor="unique">Only Unique Values</label>
            </form>
        </div>
      );
    }
}

export default Form;