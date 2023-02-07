import React, { Component } from 'react';

class Results extends Component {
    render() {
        var combinations = this.props.combinations;
        var rows = [];

        for (let i = 0; i < combinations.length; i++) {
            rows.push(
                <p className="result" key={i}>
                    <span className="result-text" 
                        onClick={(e) => {navigator.clipboard.writeText(e.target.outerText)}}>
                        {JSON.stringify(combinations[i])}
                    </span>
                </p>
            );
        }

        var displayText;
        if (rows.length == 0) {
            displayText = <p className="no-results">No Results Found</p>;
        } else if (!this.props.moreResults) {
            displayText = <p className="no-results">End of Results</p>;
        } else {
            displayText = <p>&nbsp;</p>;
        }

        return (
            <div className="result-container">
                {rows}
                {
                    this.props.moreResults ? 
                    <button onClick={this.props.onClick}>Load 10 More Results</button> : 
                    displayText
                }
            </div>
        );
    }
}

// For future use:
// <span className="tooltiptext" id="myTooltip">Copy to clipboard</span>
// https://www.w3schools.com/howto/howto_js_copy_clipboard.asp

export default Results;