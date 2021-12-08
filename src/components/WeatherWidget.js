import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

export default class WeatherWidget extends Component {
    render() {
        return (
            <>
                <Card>
                    <Card.Body>
                        <Card.Title>{this.props.weather.desc}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{this.props.weather.date}</Card.Subtitle>
                    </Card.Body>
                </Card>
            </>
        )
    }
}
