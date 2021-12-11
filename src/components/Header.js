import React, { Component } from "react";
import Searchbar from './Searchbar.js'

export default class Header extends Component {

    render() {
        return (
            <div className='search'>
                <Searchbar handleSubmit={this.props.handleSubmit} />
            </div>
        )
    }
}