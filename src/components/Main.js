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
            students: JSON.parse(localStorage.getItem('students')),
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
            selectedGender: 'Male',
            selectedDegree: '',
            selectedFaculty: '',
            selectedMajor: '',
            selectedSemester: 0,
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
                        this.state.selectedSemester === '' ||
                        this.state.selectedEmail === '' ||
                        this.state.selectedPhoneNumber === ''
                    ) {
                        errs += '<div class="alert alert-danger">' +
                            '<strong>' +
                            'All fields must be filled!' +
                            '</strong>' +
                            '</div>'
                    }

                    let regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

                    if (!regex.test(this.state.selectedEmail)) {
                        errs += '<div class="alert alert-danger">' +
                            '<strong>' +
                            'Format email is wrong!' +
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

                    if (errs.length > 0) {
                        Swal
                            .fire({
                                html: errs,
                                icon: 'error'
                            })

                        return
                    }

                    let students = this.state.students

                    students.splice(this.state.index, 1, {
                        id: this.state.selectedId,
                        name: this.state.selectedName,
                        born: this.state.selectedBorn,
                        gender: this.state.selectedGender,
                        degree: this.state.selectedDegree,
                        faculty: this.state.selectedFaculty,
                        major: this.state.selectedMajor,
                        semester: this.state.selectedSemester,
                        email: this.state.selectedEmail,
                        phoneNumber: this.state.selectedPhoneNumber
                    })

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
        console.log(e.target.id.slice(2))

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
                    let students = this.state.students

                    students.splice(x, 1)

                    this.refresh(students)

                    Swal.fire({
                        title: 'Successfully deleted student data',
                        icon: 'success'
                    })
                }
            })
    }

    refresh(students) {
        localStorage.setItem('students', JSON.stringify(students))

        this.setState({
            students: JSON.parse(localStorage.getItem('students'))
        })
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
                        <AddButton
                            handleToggle={this.toggleModal}
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
                        <AddForm
                            students={this.state.students}
                            show={this.state.show}
                            handleToggle={this.toggleModal}
                            handleRefresh={this.refresh}
                        />
                        <EditForm
                            selectedId={this.state.selectedId}
                            selectedName={this.state.selectedName}
                            selectedBorn={this.state.selectedBorn}
                            selectedGender={this.state.selectedGender}
                            selectedDegree={this.state.selectedDegree}
                            selectedFaculty={this.state.selectedFaculty}
                            selectedMajor={this.state.selectedMajor}
                            selectedSemester={this.state.selectedSemester}
                            selectedEmail={this.state.selectedEmail}
                            selectedPhoneNumber={this.state.selectedPhoneNumber}
                            show={this.state.show2}
                            handleUpdate={this.updateData}
                            handleChange={this.handleChange}
                            handleToggle={this.toggleModal2}
                            handleRefresh={this.refresh}
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
