import React, { Component } from "react";
import Location from './Location.js';

export default class Main extends Component {
    render() {
        if (this.props.renderLocation !== "") {
            return (
                <Location renderLocation={this.props.renderLocation} mapImage={this.props.mapImage} />
            )
        }
    }
}