import React, { Component } from "react";

export class Choice extends Component {
    render() {
        return (
            <div className="choice">
                <div className="window">
                    <div className="cell_1">item 1</div>
                    <div className="cell_2">item 2</div>
                    <div className="cell_3">item 3</div>
                </div>
            </div>
        )
    }
}

export default Choice