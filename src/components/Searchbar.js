import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class Searchbar extends Component {
    render() {
        return (
            <Form onSubmit={this.props.handleSubmit}>
                <Form.Group>
                    <Form.Label><h2>Enter a City You'd Like to Explore</h2></Form.Label>
                </Form.Group>
                <Form.Group className='input'>
                    <Form.Control type='text' placeholder='City Name' name='city' />
                    <Button type='submit'>Explore!</Button>
                </Form.Group>
            </Form>
        )
    }
}