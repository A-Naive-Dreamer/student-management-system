import React, { Component } from 'react'
import {
    Form,
    Button
} from 'react-bootstrap'

export default class AddButton extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Form>
                <Form.Group>
                    <Button
                        type="button"
                        block={true}
                        className="text-white"
                        onClick={this.props.handleToggle}
                    >
                        Add
                    </Button>
                </Form.Group>
            </Form>
        )
    }
}
