import React, { Component } from 'react';

class Results extends Component {
    render() {
        var combinations = this.props.combinations;
        var rows = [];

        for (let i = 0; i < combinations.length; i++) {
            rows.push(
                <p className="result" key={i}>
                    <span className="result-text">{JSON.stringify(combinations[i])}</span>
                </p>
            );
        }

        return (
            <div className="result-container">
                {rows}
            </div>
        );
    }
}

export default Results;