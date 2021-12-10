import React, { Component } from 'react'
import MovieWidget from './MovieWidget.js'
import Carousel from "react-bootstrap/Carousel";

export default class Movie extends Component {
    render() {

        let cityName = this.props.searchLocation.display_name && this.props.searchLocation.display_name.split(',')[0]

        return (
            <div className='movie'>
                <h1>{cityName} Movies:</h1>
                <Carousel fade className='movie-carousel'>
                    {this.props.movies.map((movie, idx) => <Carousel.Item key={movie.title + idx} className='movie-item'><MovieWidget movie={movie} /></Carousel.Item>)}
                </Carousel>
            </div>
        )
    }
}
