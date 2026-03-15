import React, { Component } from "react";

export class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="square">
                    <div className="circle_1">
                        <div className ="presentation"></div>
                    </div>
                    <div className="circle_2"></div>
                    <div className="circle_3"></div>
                    <div className="search"></div>

                </div>
            </div>
        )
    }
}

export default Header