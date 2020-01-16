import React, { Component } from 'react'
import {
    Row,
    Col
} from 'react-bootstrap'

export default class Header extends Component {
    render() {
        return (
            <Row
                noGutters={true}
                className="justify-content-center"
            >
                <Col
                    xs={{
                        span: 12,
                        order: 1
                    }}
                    md={{
                        span: 6,
                        order: 1
                    }}
                    className="dark"
                >
                    <header>
                        <h1 className="text-primary text-center">
                            STUDENT MANAGEMENT SYSTEM
                        </h1>
                    </header>
                </Col>
            </Row>
        )
    }
}
