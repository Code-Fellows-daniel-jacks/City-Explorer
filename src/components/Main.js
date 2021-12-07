import React, { Component } from "react";
import Location from './Location.js';

export default class Main extends Component {
    render() {
        return (
            <>
                {this.props.renderLocation.display_name &&
                <Location renderLocation={this.props.renderLocation} mapImage={this.props.mapImage} />
                }
            </>
        )
    }
}