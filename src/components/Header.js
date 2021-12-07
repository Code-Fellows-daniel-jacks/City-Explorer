import React, { Component } from "react";
import Search from './Search.js'

export default class Header extends Component {

    render() {
        return (
            <div className='search'>
                <Search handleSubmit={this.props.handleSubmit} />
            </div>
        )
    }
}