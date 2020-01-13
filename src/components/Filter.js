import React, { Component } from 'react'
import {
    Row,
    Col,
    Form,
    FormText,
    FormGroup
} from 'react-bootstrap'

export default class Filter extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Row noGutters={true}>
                    <Col
                        xs={{
                            span: 12,
                            order: 1
                        }}
                        md={{
                            span: 3,
                            order: 1
                        }}
                    >
                        <Form>
                            <FormGroup>
                                <FormText>
                                    Degree
                                </FormText>
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
                            </FormGroup>
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
                            <FormGroup>
                                <FormText>
                                    Faculty
                                </FormText>
                                <select
                                    name="faculty"
                                    value={this.props.faculty}
                                    onChange={e => this.props.handleChange(e)}
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
                            </FormGroup>
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
                            <FormGroup>
                                <FormText>
                                    Major
                                </FormText>
                                <select
                                    name="major"
                                    value={this.props.major}
                                    onChange={e => this.props.handleChange(e)}
                                >
                                    <option value="">
                                        None
                                    </option>
                                    <optgroup label="Economy">
                                        <option value="Accountancy">
                                            Accountancy
                                        </option>
                                        <option value="Economy Development">
                                            Economy Development
                                        </option>
                                        <option value="Auditory">
                                            Auditory
                                        </option>
                                    </optgroup>
                                    <optgroup label="Art">
                                        <option value="Music">
                                            Music
                                        </option>
                                        <option value="Literature">
                                            Literature
                                        </option>
                                        <option value="Drama">
                                            Drama
                                        </option>
                                    </optgroup>
                                    <optgroup label="Tech">
                                        <option value="Information Technology">
                                            Information Technology
                                        </option>
                                        <option value="Civil Engineering">
                                            Civil Engineering
                                        </option>
                                        <option value="Automotive">
                                            Automotive
                                        </option>
                                    </optgroup>
                                </select>
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col
                        xs={{
                            span: 12,
                            order: 4
                        }}
                        md={{
                            span: 1,
                            order: 4
                        }}
                    >
                        <Form>
                            <FormGroup>
                                <FormText>
                                    Semester
                                </FormText>
                                <select
                                    name="semester"
                                    value={this.props.semester}
                                    onChange={e => this.props.handleChange(e)}
                                >
                                    <option value={0}>
                                        None
                                </option>
                                    <option value={1}>
                                        1
                                    </option>
                                    <option value={2}>
                                        2
                                    </option>
                                    <option value={3}>
                                        3
                                    </option>
                                    <option value={4}>
                                        4
                                    </option>
                                    <option value={5}>
                                        5
                                    </option>
                                    <option value={6}>
                                        6
                                    </option>
                                    <option value={7}>
                                        7
                                    </option>
                                    <option value={8}>
                                        8
                                </option>
                                </select>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}
