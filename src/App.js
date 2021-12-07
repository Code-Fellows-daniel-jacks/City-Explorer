import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locationQuery: '',
      renderLocation: {}
    }
  }

  getLocation = async () => {
    let result = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_PW}&q=${this.state.locationQuery}&format=json`);
    this.setState({ renderLocation: result.data[0] })
    console.log(this.state.renderLocation);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ locationQuery: e.target.city.value }, this.getLocation);
  }

  render() {
    return (
      <div>
        <Header handleSubmit={this.handleSubmit} />
        <Main renderLocation={this.state.renderLocation} />
        <Footer />
      </div>
    )
  }
}
