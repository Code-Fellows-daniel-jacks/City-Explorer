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
      mapImage: '',
      inputError: '',
      showModal: false,
      weather: [],
      movies: []
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ weather: [] });
    this.setState({ movies: [] });
    this.setState({ locationQuery: e.target.city.value }, this.getData);
  }

  getData = async () => {
    await this.getLocation();
    this.setMapImage();
    this.getWeatherData();
    this.getMovieData();
  }

  getLocation = async () => {
    try {
      let result = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_PW}&q=${this.state.locationQuery}&format=json`);
      this.setState({ searchLocation: result.data[0] });
    } catch (error) {
      this.setState({ inputError: error.response.status }, this.handleShowModal);
    }
  }

  setMapImage = () => {
    this.setState({ mapImage: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_PW}&center=${this.state.searchLocation.lat},${this.state.searchLocation.lon}&zoom=12&size=1000x1000&format=jpg&maptype=roadmap` });
  }

  getWeatherData = async () => {
    let url = `${process.env.REACT_APP_SERVER_URL}/weather-data?lat=${this.state.searchLocation.lat}&lon=${this.state.searchLocation.lon}`
    try {
      let weatherData = await axios.get(url);
      this.setState({ weather: weatherData.data });
    } catch (e) {
      console.log(e);
    }
  }

  getMovieData = async () => {
    let city = this.state.searchLocation.display_name.split(',')[0].toLowerCase();
    let url = `${process.env.REACT_APP_SERVER_URL}/movie-data?query=${city}`
    let movieData = await axios.get(url);
    this.setState({ movies: movieData.data });
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
        <Main searchLocation={this.state.searchLocation} mapImage={this.state.mapImage} weather={this.state.weather} movies={this.state.movies} />
        <Footer />
        <ErrorComp handleCloseModal={this.handleCloseModal} showModal={this.state.showModal} inputError={this.state.inputError} />
      </>
    )
  }
}
