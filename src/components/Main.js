import React, { Component } from 'react'
import Search from './Search'
import Filter from './Filter'
import Table from './Table'
import AddForm from './AddForm'
import AddButton from './AddButton'
import EditForm from './EditForm'
import View from './View'
import {
    Row,
    Col
} from 'react-bootstrap'
import Swal from 'sweetalert2'

export default class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            students: JSON.parse(localStorage.getItem('students')) || [],
            studentIds: JSON.parse(localStorage.getItem('studentIds')) || [],
            selectedStudent: {},
            studentName: '',
            degree: '',
            faculty: '',
            major: '',
            show: false,
            show2: false,
            show3: false,
            index: 0,
            selectedId: '',
            selectedName: '',
            selectedBorn: '',
            selectedPhotoProfile: {
                url: 'https://cdn.filestackcontent.com/6m7AHLTn6r9kavYRF17g',
                mimeType: 'image/png'
            },
            selectedGender: 'Male',
            selectedDegree: '',
            selectedFaculty: '',
            selectedMajor: '',
            selectedSemester: '0',
            selectedEmail: '',
            selectedPhoneNumber: ''
        }

        this.toggleModal = this.toggleModal.bind(this)
        this.toggleModal2 = this.toggleModal2.bind(this)
        this.toggleModal3 = this.toggleModal3.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.remove = this.remove.bind(this)
        this.refresh = this.refresh.bind(this)
        this.openModal = this.openModal.bind(this)
        this.openModal2 = this.openModal2.bind(this)
        this.updateData = this.updateData.bind(this)
        this.editPhotoProfile = this.editPhotoProfile.bind(this)
        this.switchFaculty = this.switchFaculty.bind(this)
        this.switchMajor = this.switchMajor.bind(this)
        this.switchFaculty2 = this.switchFaculty2.bind(this)
        this.switchMajor2 = this.switchMajor2.bind(this)
    }

    switchFaculty(e) {
        this.setState({
            faculty: e.target.value,
            major: ''
        })
    }

    switchMajor() {
        switch (this.state.faculty) {
            case 'Economy':
                return (
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
                )
            case 'Art':
                return (
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
                )
            case 'Tech':
                return (
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
                )
            default:
                return ''
        }
    }

    switchFaculty2(e) {
        this.setState({
            selectedFaculty: e.target.value,
            selectedMajor: ''
        })
    }

    switchMajor2() {
        switch (this.state.selectedFaculty) {
            case 'Economy':
                return (
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
                )
            case 'Art':
                return (
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
                )
            case 'Tech':
                return (
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
                )
            default:
                return ''
        }
    }

    editPhotoProfile(result) {
        this.setState({
            selectedPhotoProfile: {
                url: result.filesUploaded[0].url,
                mimeType: result.filesUploaded[0].mimetype.toLowerCase()
            }
        })
    }

    updateData() {
        Swal
            .fire({
                title: 'Are you sure want want to update student data?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, update student data',
                cancelButtonText: 'No, keep it like before'
            })
            .then((decision) => {
                if (decision.value) {
                    let errs = ''

                    if (
                        this.state.selectedId === '' ||
                        this.state.selectedName === '' ||
                        this.state.selectedBorn === '' ||
                        this.state.selectedGender === '' ||
                        this.state.selectedDegree === '' ||
                        this.state.selectedFaculty === '' ||
                        this.state.selectedMajor === '' ||
                        this.state.selectedSemester === '0' ||
                        this.state.selectedEmail === '' ||
                        this.state.selectedPhoneNumber === ''
                    ) {
                        errs += '<div class="alert alert-danger">' +
                            '<strong>' +
                            'All fields must be filled!' +
                            '</strong>' +
                            '</div>'
                    }

                    let regex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i

                    if (!regex.test(this.state.selectedEmail)) {
                        errs += '<div class="alert alert-danger">' +
                            '<strong>' +
                            'Format of email is wrong!' +
                            '</strong>' +
                            '</div>'
                    }

                    regex = /^([A-Z]{1}[a-z]*){1}([\s]{1}[A-Z]{1}[a-z]*)*$/gm

                    if (!regex.test(this.state.selectedName)) {
                        errs += '<div class="alert alert-danger">' +
                            '<strong>' +
                            'Format of name is wrong, name just can contains [a-z], [A-Z], and space!' +
                            '</strong>' +
                            '</div>'
                    }

                    regex = /^[+]{1}[1-9]{1}([0-9]*){2}[\s]{1}[0-9]{3}(([\s]?[-]{1}[\s]?){1}[0-9]{4,}){2}$/gm

                    if (!regex.test(this.state.selectedPhoneNumber)) {
                        errs += '<div class="alert alert-danger">' +
                            '<strong>' +
                            'Format of phone number is wrong (right example: +62 812 - 7885 - 1450)!' +
                            '</strong>' +
                            '</div>'
                    }

                    let born = new Date(this.state.selectedBorn)

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

                    if (
                        !(
                            this.state.selectedPhotoProfile.mimeType === 'image/jpg' ||
                            this.state.selectedPhotoProfile.mimeType === 'image/jpeg' ||
                            this.state.selectedPhotoProfile.mimeType === 'image/png'
                        )
                    ) {
                        errs += '<div class="alert alert-danger">' +
                            '<strong>' +
                            'File type allowed are image/jpg, image/jpeg, and image/png!' +
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

                    let students = this.state.students

                    students.splice(
                        this.state.index,
                        1,
                        {
                            id: this.state.selectedId,
                            name: this.state.selectedName,
                            born: this.state.selectedBorn,
                            photoProfile: this.state.selectedPhotoProfile,
                            gender: this.state.selectedGender,
                            degree: this.state.selectedDegree,
                            faculty: this.state.selectedFaculty,
                            major: this.state.selectedMajor,
                            semester: this.state.selectedSemester,
                            email: this.state.selectedEmail,
                            phoneNumber: this.state.selectedPhoneNumber
                        }
                    )

                    this.refresh(students)

                    Swal
                        .fire({
                            title: 'Successfully updated student data',
                            icon: 'success',
                        })
                        .then(result => {
                            this.toggleModal2()
                        })
                }
            })
    }

    handleChange(e) {
        let val = e.target.value

        this.setState({
            [e.target.name]: val
        })
    }

    openModal(e) {
        let index = parseInt(e.target.id)

        if (!isNaN(index)) {
            this.setState(
                {
                    index: index,
                    selectedId: this.state.students[index].id,
                    selectedName: this.state.students[index].name,
                    selectedBorn: this.state.students[index].born,
                    selectedPhotoProfile: this.state.students[index].photoProfile,
                    selectedGender: this.state.students[index].gender,
                    selectedDegree: this.state.students[index].degree,
                    selectedFaculty: this.state.students[index].faculty,
                    selectedMajor: this.state.students[index].major,
                    selectedSemester: this.state.students[index].semester,
                    selectedEmail: this.state.students[index].email,
                    selectedPhoneNumber: this.state.students[index].phoneNumber
                },
                () => {
                    this.toggleModal2()
                }
            )
        }
    }

    openModal2(e) {
        let index = parseInt(e.target.id.slice(2))

        if (!isNaN(index)) {
            this.setState(
                {
                    selectedStudent: this.state.students[index]
                },
                () => {
                    this.toggleModal3()
                }
            )
        }
    }

    toggleModal2() {
        this.setState({
            show2: !this.state.show2
        })
    }

    toggleModal3() {
        this.setState({
            show3: !this.state.show3
        })
    }

    toggleModal() {
        this.setState({
            show: !this.state.show
        })
    }

    remove(x) {
        Swal
            .fire({
                title: 'Are you sure want want to delete student data?',
                icon: 'error',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete student data',
                cancelButtonText: 'No, keep it'
            })
            .then((decision) => {
                if (decision.value) {
                    let students = this.state.students,
                        studentIds = this.state.studentIds

                    students.splice(x, 1)
                    studentIds.splice(x, 1)

                    this.refresh(students, studentIds)

                    Swal.fire({
                        title: 'Successfully deleted student data',
                        icon: 'success'
                    })
                }
            })
    }

    refresh(students, studentIds) {
        localStorage.setItem('students', JSON.stringify(students))

        this.setState({
            students: JSON.parse(localStorage.getItem('students'))
        })

        if (studentIds) {
            localStorage.setItem('studentIds', JSON.stringify(studentIds))
        }
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
                        className="dark"
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
                        className="dark"
                    >
                        <Filter
                            switchFaculty={this.switchFaculty}
                            switchMajor={this.switchMajor}
                            handleChange={this.handleChange}
                            degree={this.state.degree}
                            faculty={this.state.faculty}
                            major={this.state.major}
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
                        className="dark"
                    >
                        <Table
                            students={this.state.students}
                            degree={this.state.degree}
                            faculty={this.state.faculty}
                            major={this.state.major}
                            studentName={this.state.studentName}
                            remove={this.remove}
                            handleToggle={this.openModal}
                            handleToggle2={this.openModal2}
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
                        <AddButton handleToggle={this.toggleModal} />
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
                        <AddForm
                            switchFaculty={this.switchFaculty}
                            switchMajor={this.switchMajor}
                            students={this.state.students}
                            studentIds={this.state.studentIds}
                            show={this.state.show}
                            handleToggle={this.toggleModal}
                            handleRefresh={this.refresh}
                        />
                        <EditForm
                            selectedId={this.state.selectedId}
                            selectedName={this.state.selectedName}
                            selectedBorn={this.state.selectedBorn}
                            selectedPhotoProfile={this.state.selectedPhotoProfile}
                            selectedGender={this.state.selectedGender}
                            selectedDegree={this.state.selectedDegree}
                            selectedFaculty={this.state.selectedFaculty}
                            selectedMajor={this.state.selectedMajor}
                            selectedSemester={this.state.selectedSemester}
                            selectedEmail={this.state.selectedEmail}
                            selectedPhoneNumber={this.state.selectedPhoneNumber}
                            show={this.state.show2}
                            switchFaculty={this.switchFaculty2}
                            switchMajor={this.switchMajor2}
                            handleUpdate={this.updateData}
                            handleChange={this.handleChange}
                            handleToggle={this.toggleModal2}
                            handleRefresh={this.refresh}
                            handleEditPhotoProfile={this.editPhotoProfile}
                        />
                        <View
                            show={this.state.show3}
                            student={this.state.selectedStudent}
                            handleToggle={this.toggleModal3}
                        />
                    </Col>
                </Row>
            </main >
        )
    }
}
