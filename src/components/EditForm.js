import React, { Component } from 'react'
import {
    Modal,
    Form,
    Button,
    Image
} from 'react-bootstrap'
import ReactFilestack from 'filestack-react'
import EditIcon from '../assets/images/edit.png'

export default class EditForm extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Modal show={this.props.show}>
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
                        Edit Student Data of {` ${this.props.selectedName}`}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image
                        thumbnail={true}
                        alt="Photo Profile"
                        src={this.props.selectedPhotoProfile}
                        className="photo-profiles"
                    />
                    <ReactFilestack
                        apikey="ABBQtIvFBQcCqLaoeFv30z"
                        buttonText="Edit Photo Profile"
                        buttonClass="btn btn-primary btn-block"
                        options={{
                            accept: 'image/*',
                            fromSources: ['local_file_system'],
                            maxFiles: 1
                        }}
                        onSuccess={this.props.handleEditPhotoProfile}
                    />
                    <Form>
                        <Form.Group>
                            <Form.Label>
                                Student ID:
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name="selectedId"
                                placeholder="Student ID"
                                value={this.props.selectedId}
                                onChange={e => this.props.handleChange(e)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Name:
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name="selectedName"
                                placeholder="Name"
                                value={this.props.selectedName}
                                onChange={e => this.props.handleChange(e)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Born:
                            </Form.Label>
                            <Form.Control
                                type="date"
                                name="selectedBorn"
                                value={this.props.selectedBorn}
                                onChange={e => this.props.handleChange(e)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Gender:
                            </Form.Label>
                            <Form.Control
                                as="select"
                                name="selectedGender"
                                value={this.props.selectedGender}
                                onChange={e => this.props.handleChange(e)}
                            >
                                <option value="Male">
                                    Male
                                </option>
                                <option value="Female">
                                    Female
                                </option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Degree:
                            </Form.Label>
                            <Form.Control
                                as="select"
                                name="selectedDegree"
                                value={this.props.selectedDegree}
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
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Faculty:
                            </Form.Label>
                            <Form.Control
                                as="select"
                                name="selectedFaculty"
                                value={this.props.selectedFaculty}
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
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Major:
                            </Form.Label>
                            <Form.Control
                                as="select"
                                name="selectedMajor"
                                value={this.props.selectedMajor}
                                onChange={e => this.props.handleChange(e)}
                            >
                                <option value="">
                                    None
                                </option>
                                {
                                    this.props.switchMajor()
                                }
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Semester:
                            </Form.Label>
                            <Form.Control
                                as="select"
                                name="selectedSemester"
                                value={this.props.selectedSemester}
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
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Email:
                            </Form.Label>
                            <Form.Control
                                type="email"
                                name="selectedEmail"
                                placeholder="Email"
                                value={this.props.selectedEmail}
                                onChange={e => this.props.handleChange(e)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Phone Number:
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name="selectedPhoneNumber"
                                placeholder="Phone Number"
                                value={this.props.selectedPhoneNumber}
                                onChange={e => this.props.handleChange(e)}
                            />
                        </Form.Group>
                        <Button
                            type="button"
                            variant="warning"
                            block={true}
                            onClick={this.props.handleUpdate}
                            className="text-white"
                        >
                            <Image
                                src={EditIcon}
                                alt="Edit"
                                width="25"
                                height="25"
                            />
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        )
    }
}
