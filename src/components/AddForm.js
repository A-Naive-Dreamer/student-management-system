import React, { Component } from 'react'
import {
    Modal,
    Form,
    Button,
    Image
} from 'react-bootstrap'
import Swal from 'sweetalert2'
import AddIcon from '../assets/images/add.png'

export default class AddForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            name: '',
            born: '',
            gender: 'Male',
            degree: '',
            faculty: '',
            major: '',
            semester: 0,
            email: '',
            phoneNumber: '',
            errs: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.reset = this.reset.bind(this)
        this.addStudentData = this.addStudentData.bind(this)

        console.log(this.props.students)
    }

    addStudentData() {
        Swal
            .fire({
                title: 'Are you sure want to add new student data?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, Add new student data',
                cancelButtonText: 'No, do not add new student data'
            })
            .then(decision => {
                if (decision.value) {
                    let errs = ''

                    if (
                        this.state.id === '' ||
                        this.state.name === '' ||
                        this.state.born === '' ||
                        this.state.gender === '' ||
                        this.state.degree === '' ||
                        this.state.faculty === '' ||
                        this.state.major === '' ||
                        this.state.semester === '' ||
                        this.state.email === '' ||
                        this.state.phoneNumber === ''
                    ) {
                        errs += '<div class="alert alert-danger">' +
                            '<strong>' +
                            'All fields must be filled!' +
                            '</strong>' +
                            '</div>'
                    }

                    let regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

                    if (!regex.test(this.state.email)) {
                        errs += '<div class="alert alert-danger">' +
                            '<strong>' +
                            'Format email is wrong!' +
                            '</strong>' +
                            '</div>'
                    }

                    let born = new Date(this.state.born)

                    if (born > (Date.now() - (18 * 365 * 24 * 60 * 60 * 1000))) {
                        errs += '<div class="alert alert-danger">' +
                            '<strong>' +
                            'The age of student must be older than 18 years old!' +
                            '</strong>' +
                            '</div>'
                    }

                    if (born > new Date(`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`)) {
                        errs += '<div class="alert alert-danger">' +
                            '<strong>' +
                            'The date can not be more than today date!' +
                            '</strong>' +
                            '</div>'
                    }

                    if (born < (Date.now() - (25 * 365 * 24 * 60 * 60 * 1000))) {
                        errs += '<div class="alert alert-danger">' +
                            '<strong>' +
                            'The age of student must be younger than 26 years old!' +
                            '</strong>' +
                            '</div>'
                    }

                    if (errs.length > 0) {
                        Swal
                            .fire({
                                html: errs,
                                icon: 'error'
                            })

                        return
                    }

                    let students = this.props.students

                    students.push({
                        id: this.state.id,
                        name: this.state.name,
                        born: this.state.born,
                        gender: this.state.gender,
                        degree: this.state.degree,
                        faculty: this.state.faculty,
                        major: this.state.major,
                        semester: parseInt(this.state.semester),
                        email: this.state.email,
                        phoneNumber: this.state.phoneNumber
                    })

                    this.props.handleRefresh(students)
                    this.reset()

                    Swal
                        .fire({
                            title: 'Successfully added new student data',
                            icon: 'success'
                        })
                        .then(decision => {
                            this.props.handleToggle()
                        })
                }
            })
    }

    reset() {
        this.setState({
            id: '',
            name: '',
            born: '',
            gender: 'Male',
            degree: '',
            faculty: '',
            major: '',
            semester: 0,
            email: '',
            phoneNumber: ''
        })
    }

    handleChange(e) {
        let val = e.target.value

        this.setState({
            [e.target.name]: val
        })
    }

    render() {
        return (
            <>
                <Modal
                    onExit={this.reset}
                    show={this.props.show}
                >
                    <Button
                        variant="danger"
                        block={true}
                        type="button"
                        onClick={this.props.handleToggle}
                    >
                        &times;
                    </Button>
                    <Modal.Header>
                        <Modal.Title className="text-primary">
                            Add New Student Data
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>
                                    Student ID:
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    name="id"
                                    placeholder="Student ID"
                                    value={this.state.id}
                                    onChange={e => this.handleChange(e)}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Name:
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={this.state.name}
                                    onChange={e => this.handleChange(e)}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Born:
                                </Form.Label>
                                <Form.Control
                                    type="date"
                                    name="born"
                                    value={this.state.born}
                                    onChange={e => this.handleChange(e)}
                                    min="1970-1-1"
                                    max={`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Gender:
                                </Form.Label>
                                <Form.Control
                                    as="select"
                                    name="gender"
                                    value={this.state.gender}
                                    onChange={e => this.handleChange(e)}
                                >
                                    <option value="Male">
                                        Male
                                    </option>
                                    <option value="Female">
                                        Female
                                    </option>
                                </Form.Control>
                                {/* <Form.Control
                                    type="radio"
                                    name="gender"
                                    value="Male"
                                    onChange={e => this.handleChange(e)}
                                    inline={true}
                                />
                                <FormLabel for="gender">Male</FormLabel>
                                <Form.Control
                                    type="radio"
                                    name="gender"
                                    value="Female"
                                    onChange={e => this.handleChange(e)}
                                    inline={true}
                                />
                                <FormLabel for="gender">Female</FormLabel> */}
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Degree:
                                </Form.Label>
                                <Form.Control
                                    as="select"
                                    name="degree"
                                    value={this.state.degree}
                                    onChange={e => this.handleChange(e)}
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
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Faculty:
                                </Form.Label>
                                <Form.Control
                                    as="select"
                                    name="faculty"
                                    value={this.state.faculty}
                                    onChange={e => this.handleChange(e)}
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
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Major:
                                </Form.Label>
                                <Form.Control
                                    as="select"
                                    name="major"
                                    value={this.state.major}
                                    onChange={e => this.handleChange(e)}
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
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Semester:
                                </Form.Label>
                                <Form.Control
                                    as="select"
                                    name="semester"
                                    value={this.state.semester}
                                    onChange={e => this.handleChange(e)}
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
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Email:
                                    </Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={e => this.handleChange(e)}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Phone Number:
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    name="phoneNumber"
                                    placeholder="Phone Number"
                                    value={this.state.phoneNumber}
                                    onChange={e => this.handleChange(e)}
                                />
                            </Form.Group>
                            <Button
                                type="button"
                                variant="warning"
                                block={true}
                                onClick={this.reset}
                                className="text-white"
                            >
                                Reset
                            </Button>
                            <Button
                                type="button"
                                variant="success"
                                block={true}
                                onClick={this.addStudentData}
                            >
                                <Image
                                    src={AddIcon}
                                    alt="Add"
                                    width="25"
                                    height="25"
                                />
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}
