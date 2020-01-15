import React, { Component } from 'react'
import {
    Row,
    Col,
    Form
} from 'react-bootstrap'

export default class Filter extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Row
                noGutters={true}
                id="filter"
            >
                <Col
                    xs={{
                        span: 12,
                        order: 1
                    }}
                    md={{
                        span: 4,
                        order: 1
                    }}
                >
                    <Form>
                        <Form.Group>
                            <Form.Label>
                                Degree:
                            </Form.Label>
                            <select
                                name="degree"
                                value={this.props.degree}
                                onChange={e => this.props.handleChange(e)}
                            >
                                <option value="">
                                    None
                                </option>
                                <option value="Bachelor">
                                    Bachelor
                                </option>
                                <option value="Master">
                                    Master
                                </option>
                                <option value="Doctorate">
                                    Doctorate
                                </option>
                            </select>
                        </Form.Group>
                    </Form>
                </Col>
                <Col
                    xs={{
                        span: 12,
                        order: 2
                    }}
                    md={{
                        span: 3,
                        order: 2
                    }}
                >
                    <Form>
                        <Form.Group>
                            <Form.Label>
                                Faculty:
                            </Form.Label>
                            <select
                                name="faculty"
                                value={this.props.faculty}
                                onChange={e => this.props.switchFaculty(e)}
                            >
                                <option value="">
                                    None
                                </option>
                                <option value="Economy">
                                    Economy
                                </option>
                                <option value="Art">
                                    Art
                                </option>
                                <option value="Tech">
                                    Tech
                                </option>
                            </select>
                        </Form.Group>
                    </Form>
                </Col>
                <Col
                    xs={{
                        span: 12,
                        order: 3
                    }}
                    md={{
                        span: 5,
                        order: 3
                    }}
                >
                    <Form>
                        <Form.Group>
                            <Form.Label>
                                Major:
                            </Form.Label>
                            <select
                                name="major"
                                value={this.props.major}
                                onChange={e => this.props.handleChange(e)}
                            >
                                <option value="">
                                    None
                                </option>
                                {
                                    this.props.switchMajor()
                                }
                            </select>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        )
    }
}
