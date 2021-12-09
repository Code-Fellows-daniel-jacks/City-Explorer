import React, { Component } from "react";
import Location from './Location.js';
import WeatherWidget from './WeatherWidget.js'
import MovieWidget from './MovieWidget.js'
import Carousel from "react-bootstrap/Carousel";

export default class Main extends Component {
    render() {

        let cityName = this.props.searchLocation.display_name && this.props.searchLocation.display_name.split(',')[0]

        return (
            <>
                {this.props.searchLocation.display_name &&
                    <Location searchLocation={this.props.searchLocation} mapImage={this.props.mapImage} />
                }
                <>
                    {this.props.weather.length > 0 &&
                        <div className='weather'>
                            <h1>Current Weather:</h1>
                            <div className='weather-tabs'>
                                {this.props.weather.map((_, index) => <WeatherWidget key={this.props.weather[index].date} weather={this.props.weather[index]} />)}
                            </div>
                        </div>
                    }
                </>
                <>
                    {this.props.movies.length > 0 &&
                        <div className='movie'>
                            <h1>{cityName} Movies:</h1>
                            <Carousel fade className='movie-carousel'>
                                {this.props.movies.map((movie, idx) => <Carousel.Item key={movie.title + idx} className='movie-item'><MovieWidget movie={movie} /></Carousel.Item>)}
                            </Carousel>
                        </div>
                    }
                </>
            </>
        )
    }
}

// style={{ height: '40rem', overflow: 'auto', backgroundColor: '$prussion-blue', color: 'snow' }}
// margin - top: .5rem;
// background - color: $prussian - blue;
// color: snow;
// font - size: 1.1em;