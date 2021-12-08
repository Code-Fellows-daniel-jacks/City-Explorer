import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'

export default class Error extends Component {

    handleClose = () => {
        this.props.handleCloseModal()
    }

    render() {
        return (
            <>
                <Modal
                    show={this.props.showModal}
                    onHide={this.handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>ERROR: {this.props.inputError}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Error: invalid location name
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}
