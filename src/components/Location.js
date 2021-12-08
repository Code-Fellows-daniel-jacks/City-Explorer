import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

export default class Location extends Component {
    render() {
        return (
            <Card className='location-card'>
                <Card.Body>
                    <Card.Title><h3>{this.props.searchLocation.display_name}</h3></Card.Title>
                    <Card.Img src={this.props.mapImage} />
                    <Card.Text>
                        Latitude: {(this.props.searchLocation.lat)}, Longitude: {(this.props.searchLocation.lon)}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}
