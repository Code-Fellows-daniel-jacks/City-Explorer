import React, { Component } from "react";
import Card from 'react-bootstrap/Card';

export default class Main extends Component {
    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>{this.props.renderLocation.display_name}</Card.Title>
                    <Card.Img />
                    <Card.Text>
                        {this.props.renderLocation.lat}, {this.props.renderLocation.lon}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}