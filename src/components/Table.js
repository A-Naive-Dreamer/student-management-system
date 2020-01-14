import React, { Component } from 'react'
import {
    Table as Table2,
    Button,
    Form
} from 'react-bootstrap'

export default class Table extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="table">
                <Table2
                    striped={true}
                    hover={true}
                    variant="light"
                    className="bg-light"
                    responsive="md"
                >
                    <thead>
                        <tr>
                            <th>
                                Student ID
                        </th>
                            <th>
                                Name
                        </th>
                            <th>
                                Born
                        </th>
                            <th>
                                Gender
                        </th>
                            <th>
                                Degree
                        </th>
                            <th>
                                Faculty
                        </th>
                            <th>
                                Major
                        </th>
                            <th>
                                Semester
                        </th>
                            <th>
                                Email
                        </th>
                            <th>
                                Phone Number
                        </th>
                            <th>
                                Actions
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.students.map((student, index) => {
                                if (
                                    student.name.toLowerCase().includes(this.props.studentName.toLowerCase()) &&
                                    student.degree.toLowerCase().includes(this.props.degree.toLowerCase()) &&
                                    student.faculty.toLowerCase().includes(this.props.faculty.toLowerCase()) &&
                                    student.major.toLowerCase().includes(this.props.major.toLowerCase())
                                ) {
                                    return (
                                        <tr>
                                            <td>
                                                {
                                                    student.id
                                                }
                                            </td>
                                            <td>
                                                {
                                                    student.name
                                                }
                                            </td>
                                            <td>
                                                {
                                                    student.born
                                                }
                                            </td>
                                            <td>
                                                {
                                                    student.gender
                                                }
                                            </td>
                                            <td>
                                                {
                                                    student.degree
                                                }
                                            </td>
                                            <td>
                                                {
                                                    student.faculty
                                                }
                                            </td>
                                            <td>
                                                {
                                                    student.major
                                                }
                                            </td>
                                            <td>
                                                {
                                                    student.semester
                                                }
                                            </td>
                                            <td>
                                                {
                                                    student.email
                                                }
                                            </td>
                                            <td>
                                                {
                                                    student.phoneNumber
                                                }
                                            </td>
                                            <td>
                                                <Form>
                                                    <Form.Group>
                                                        <Button
                                                            type="button"
                                                            block={true}
                                                            onClick={() => this.props.remove(index)}
                                                            variant="danger"
                                                            className="text-white"
                                                        >
                                                            Delete
                                                </Button>
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Button
                                                            type="button"
                                                            block={true}
                                                            id={`${index}`}
                                                            onClick={e => this.props.handleToggle(e)}
                                                            variant="warning"
                                                            className="text-white"
                                                        >
                                                            Edit
                                                </Button>
                                                    </Form.Group>
                                                </Form>
                                            </td>
                                        </tr>
                                    )
                                }
                            })
                        }
                    </tbody>
                </Table2>
            </div>
        )
    }
}
