import React, { Component } from 'react'
import {
    Form,
    FormGroup,
    Button
} from 'react-bootstrap'

export default class AddButton extends Component {
    render() {
        return (
            <Form>
                <FormGroup>
                    <Button
                        type="button"
                        block={true}
                        className="text-white"
                    >
                        Add
                    </Button>
                </FormGroup>
            </Form>
        )
    }
}
