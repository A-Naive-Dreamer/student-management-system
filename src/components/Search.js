import React, { Component } from 'react'
import {
    Form,
    Button,
    Image
} from 'react-bootstrap'
import SearchIcon from '../assets/images/search.png'

export default class Search extends Component {
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
                        <Image
                            src={SearchIcon}
                            alt="Search"
                            className="icons"
                            width="30"
                            height="30"
                        />
                    </Button>
                </Form.Group>
            </Form>
        )
    }
}
