import React, { Component } from "react";
import Card from 'react-bootstrap/Card';

export default class Main extends Component {
    render() {
        return (
            <Card>
                {this.props.renderLocation.display_name}
                {this.props.renderLocation.lat}
                {this.props.renderLocation.lon}
            </Card>
        )
    }
}