import React, { Component } from 'react'
import {
    Table as Table2,
    Button,
    Form,
    Image
} from 'react-bootstrap'
import EditIcon from '../assets/images/edit.png'
import RemoveIcon from '../assets/images/bin.png'
import EyeIcon from '../assets/images/eye.png'

export default class Table extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let x = 0

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
                                No.
                            </th>
                            <th>
                                Photo Profile
                            </th>
                            <th>
                                Student ID
                            </th>
                            <th>
                                Name
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
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.students.map((student, index) => {
                                if (
                                    student.name.toLowerCase().includes(this.props.studentName.toLowerCase()) &&
                                    student.degree.includes(this.props.degree) &&
                                    student.faculty.includes(this.props.faculty) &&
                                    student.major.includes(this.props.major)
                                ) {
                                    return (
                                        <tr>
                                            <td>
                                                {++x}.
                                            </td>
                                            <td>
                                                <Image
                                                    thumbnail={true}
                                                    alt="Photo Profile"
                                                    src={student.photoProfile}
                                                    className="photo-profiles-2"
                                                />
                                            </td>
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
                                                <Form>
                                                    <Form.Group>
                                                        <Button
                                                            type="button"
                                                            block={true}
                                                            onClick={() => this.props.remove(index)}
                                                            variant="danger"
                                                            className="text-white"
                                                        >
                                                            <Image
                                                                src={RemoveIcon}
                                                                alt="Remove"
                                                                height="25"
                                                                width="25"
                                                            />
                                                        </Button>
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Button
                                                            type="button"
                                                            block={true}
                                                            id={index}
                                                            onClick={e => this.props.handleToggle(e)}
                                                            variant="warning"
                                                            className="text-white"
                                                        >
                                                            <Image
                                                                src={EditIcon}
                                                                alt="Edit"
                                                                width="25"
                                                                height="25"
                                                            />
                                                        </Button>
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Button
                                                            type="button"
                                                            block={true}
                                                            id={`1-${index}`}
                                                            onClick={e => this.props.handleToggle2(e)}
                                                            variant="info"
                                                            className="text-white"
                                                        >
                                                            <Image
                                                                src={EyeIcon}
                                                                alt="View"
                                                                width="25"
                                                                height="25"
                                                            />
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
