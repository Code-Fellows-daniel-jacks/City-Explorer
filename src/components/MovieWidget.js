import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

export default class WeatherWidget extends Component {
    render() {
        const movie = this.props.movie.image_url;
        return (
            <Card>
                <Card.Img
                    variant="top"
                    src={movie.length > 40 ? movie : 'https://via.placeholder.com/212x300'}
                />
                <Card.Body>
                    <Card.Title>{this.props.movie.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{this.props.movie.releaseDate}</Card.Subtitle>
                    <Card.Text>{this.props.movie.overview}</Card.Text>
                    <Card.Text>Average Votes: {this.props.movie.avgVotes} <br />
                        Total Votes: {this.props.movie.ttlVotes} <br />
                        Popularity: {this.props.movie.popularity}</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}