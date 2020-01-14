import React, { Component } from 'react'
import {
    Form,
    Button
} from 'react-bootstrap'

export default class Search extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Form id="search">
                <Form.Group>
                    <Form.Label>
                        Student Name:
                        </Form.Label>
                    <Form.Control
                        type="text"
                        value={this.props.studentName}
                        onChange={e => this.props.handleChange(e)}
                        name="studentName"
                        id="studentName"
                        placeholder="Search..."
                    />
                    <Button
                        variant="success"
                        block={true}
                    >
                        Search
                        </Button>
                </Form.Group>
            </Form>
        )
    }
}
