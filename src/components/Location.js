import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

export default class Location extends Component {
    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>{this.props.renderLocation.display_name}</Card.Title>
                    <Card.Img src='' />
                    <Card.Text>
                        {(this.props.renderLocation.lat)}, {(this.props.renderLocation.lon)}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}
