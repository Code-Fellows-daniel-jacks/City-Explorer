import React, { Component } from "react";
import Location from './Location.js';
import WeatherWidget from './WeatherWidget.js'
import MovieWidget from './MovieWidget.js'

export default class Main extends Component {
    render() {
        return (
            <>
                {this.props.searchLocation.display_name &&
                    <Location searchLocation={this.props.searchLocation} mapImage={this.props.mapImage} />
                }
                <>
                    {this.props.weather.length > 0 &&
                        <div className='weather-tabs'>
                            <h1>Weather Data:</h1>
                            {this.props.weather.map((_, index) => <WeatherWidget key={this.props.weather[index].date} weather={this.props.weather[index]} />)}
                        </div>
                    }
                </>
                <div className='movie-carousel'>
                    {/* {this.props.weather.movies > 0 && */}
                    <>
                        <h1>Movie Data:</h1>
                        {this.props.movies.map((movie) => <MovieWidget key={movie.title} movie={movie} />)}
                    </>
                    {/* } */}
                </div>
            </>
        )
    }
}