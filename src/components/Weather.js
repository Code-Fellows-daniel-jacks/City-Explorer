import React, { Component } from 'react'
import WeatherWidget from './WeatherWidget.js'

export default class Weather extends Component {
    render() {
        return (
            <div className='weather'>
                <h1>Current Weather:</h1>
                <div className='weather-tabs'>
                    {this.props.weather.map(dayOfWeather => <WeatherWidget key={dayOfWeather.date} weather={dayOfWeather} />)}
                </div>
            </div>
        )
    }
}
