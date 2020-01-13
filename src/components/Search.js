import React, { Component } from 'react'
import {
    Form,
    FormControl,
    FormText,
    FormGroup,
    Button
} from 'react-bootstrap'

export default class Search extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Form>
                    <FormGroup>
                        <FormText>
                            Student Name:
                        </FormText>
                        <FormControl
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
                    </FormGroup>
                </Form>
            </div>
        )
    }
}
