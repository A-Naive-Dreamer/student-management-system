import React, { Component } from 'react'
import Search from './Search'
import Filter from './Filter'
import Table from './Table'
import AddForm from './AddForm'
import AddButton from './AddButton'
import EditForm from './EditForm'
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
            semester: 0,
            show: false,
            show2: false,
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
        this.handleChange = this.handleChange.bind(this)
        this.remove = this.remove.bind(this)
        this.refresh = this.refresh.bind(this)
        this.openModal = this.openModal.bind(this)
        this.updateData = this.updateData.bind(this)
    }

    updateData() {
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
        this.toggleModal2()
    }

    handleChange(e) {
        let val = e.target.value

        this.setState({
            [e.target.name]: val
        })
    }

    openModal(e) {
        let index = parseInt(e.target.id)

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

    toggleModal2() {
        this.setState({
            show2: !this.state.show2
        })
    }

    toggleModal() {
        this.setState({
            show: !this.state.show
        })
    }

    remove(x) {
        let students = this.state.students

        students.splice(x, 1)

        this.refresh(students)
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
                            remove={this.remove}
                            handleToggle={this.openModal}
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
                            index={this.state.index}
                            show={this.state.show2}
                            handleUpdate={this.updateData}
                            handleChange={this.handleChange}
                            handleToggle={this.toggleModal2}
                            handleRefresh={this.refresh}
                        />
                    </Col>
                </Row>
            </main>
        )
    }
}
