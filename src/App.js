import React, { Component } from "react";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import ErrorComp from "./components/ErrorComp.js";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locationQuery: '',
      searchLocation: {},
      mapLocation: {
        lat: '',
        lon: ''
      },
      mapImage: '',
      inputError: '',
      showModal: false,
      weather: []
    }
  }

  getLocation = async () => {
    try {
      let result = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_PW}&q=${this.state.locationQuery}&format=json`);
      this.setState({ searchLocation: result.data[0], mapLocation: { lat: result.data[0].lat, lon: result.data[0].lon } }, this.getWeatherData);

      let mapResult = (`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_PW}&center=${this.state.mapLocation.lat},${this.state.mapLocation.lon}&zoom=12&size=1000x1000&format=jpg&maptype=roadmap`);
      this.setState({ mapImage: mapResult });

    } catch (error) {
      this.setState({ inputError: error.response.status }, this.handleShowModal)
    }
  }

  getWeatherData = async () => {
    let city = this.state.searchLocation.display_name.split(',')[0];
    let url = `${process.env.REACT_APP_SERVER_URL}/weather-data?city_name=${city}`
    // ?lat=${this.state.mapLocation.lat} ?lon=${this.state.mapLocation.lon}
    try {
      let weatherData = await axios.get(url);
      this.setState({ weather: weatherData.data });
    } catch (e) {
      this.setState({ inputError: e });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ weather: [] });
    this.setState({ locationQuery: e.target.city.value }, this.getLocation);
  }

  handleShowModal = () => {
    this.setState({ showModal: true })
  }

  handleCloseModal = () => {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <>
        <Header handleSubmit={this.handleSubmit} />
        <Main searchLocation={this.state.searchLocation} mapImage={this.state.mapImage} weather={this.state.weather} />
        <Footer />
        <ErrorComp handleCloseModal={this.handleCloseModal} showModal={this.state.showModal} inputError={this.state.inputError} />
      </>
    )
  }
}
