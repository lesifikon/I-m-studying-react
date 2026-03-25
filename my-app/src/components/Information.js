import React, { Component } from "react";

export class Information extends Component {
    

    render() {

        const {activeIndex, information} = this.props;

        return (
            <div className="information">
                <h1>{information[activeIndex]?.text || "Нет текста"}</h1>
                <div className="presentation"></div>
            </div>
        )
    }
}

export default Information