import React, { Component } from "react";
import Location from './Location.js';
import Weather from "./Weather.js";
import Movie from './Movie.js';


export default class Main extends Component {
    render() {
        return (
            <>
                {this.props.searchLocation.display_name &&
                    <Location searchLocation={this.props.searchLocation} mapImage={this.props.mapImage} />
                }
                {this.props.weather.length > 0 &&
                    <Weather weather={this.props.weather} />
                }
                {this.props.movies.length > 0 &&
                    <Movie movies={this.props.movies} searchLocation={this.props.searchLocation} />
                }
            </>
        )
    }
}