import React, { Component } from 'react'
import {
    Form,
    Button,
    Image
} from 'react-bootstrap'
import AddIcon from '../assets/images/add.png'

export default class AddButton extends Component {
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
                        <Image
                            src={AddIcon}
                            alt="Add"
                            width="25"
                            height="25"
                        />
                    </Button>
                </Form.Group>
            </Form>
        )
    }
}
