import React, { Component } from "react";
import Location from './Location.js';
import WeatherWidget from './WeatherWidget'

export default class Main extends Component {
    render() {
        return (
            <>
                {this.props.searchLocation.display_name &&
                    <Location searchLocation={this.props.searchLocation} mapImage={this.props.mapImage} />
                }
                <div className='weather-tabs'>
                    {this.props.weather.length > 0 &&
                        <>
                            <h1>Weather Data:</h1>
                            {this.props.weather.map((_, index) => <WeatherWidget key={this.props.weather[index].date} weather={this.props.weather[index]} />)}
                        </>
                    }
                </div>
            </>
        )
    }
}