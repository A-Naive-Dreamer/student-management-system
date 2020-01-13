import React, { Component } from 'react'
import Search from './Search'
import Filter from './Filter'
import Table from './Table'
import AddButton from './AddButton'
import {
    Row,
    Col
} from 'react-bootstrap'

export default class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            students: JSON.parse(localStorage.getItem('students')),
            studentName: '',
            degree: '',
            faculty: '',
            major: '',
            semester: 0
        }

        this.handleChange = this.handleChange.bind(this)
        this.delete = this.delete.bind(this)
        this.refresh = this.refresh.bind(this)
    }

    handleChange(e) {
        let val = e.target.value

        this.setState({
            [e.target.name]: val
        })
    }

    delete(x) {
        this.state.students.splice(x, 1)

        this.refresh()
    }

    refresh() {
        localStorage.setItem('students', this.state.students)

        this.setState({
            students: JSON.parse(localStorage.getItem('students'))
        });
    }

    render() {
        return (
            <main>
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
                    >
                        <Search
                            handleChange={this.handleChange}
                            studentName={this.state.studentName}
                        />
                    </Col>
                </Row>
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
                    >
                        <Filter
                            handleChange={this.handleChange}
                            degree={this.state.degree}
                            faculty={this.state.faculty}
                            major={this.state.major}
                            semester={this.state.semester}
                        />
                    </Col>
                </Row>
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
                    >
                        <Table
                            students={this.state.students}
                            degree={this.state.degree}
                            faculty={this.state.faculty}
                            major={this.state.major}
                            semester={this.state.semester}
                            studentName={this.state.studentName}
                        />
                    </Col>
                </Row>
                <Row
                    id="add-form"
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
                    >
                        <AddButton />
                    </Col>
                </Row>
            </main>
        )
    }
}
