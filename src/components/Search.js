import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <Form onSubmit={this.props.handleSubmit}>
                <Form.Group>
                    <Form.Label>City you'd like to explore!</Form.Label>
                    <Form.Control type='text' placeholder='city name here' name='city' />
                </Form.Group>
                <Button type='submit'>Explore!</Button>
            </Form>
        )
    }
}