import React, { Component } from "react";
import StudentList from "./StudentList";
import AddStudent from "./AddStudent";

export class Students extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: JSON.parse(localStorage.getItem("students")) || [],
      student: {
        firstName: "",
        lastName: "",
        group: "",
        doesWork: false,
      },
      search: "",
      modalOpen: false,
      studentToEdit: null,
    };
  }

  handleSearchChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  handleClose = () => {
    this.setState({ modalOpen: false });
  };

  handleOpen = () => {
    this.setState({ modalOpen: true });
  };

  handleStudentChange = (e) => {
    this.setState({
      student: {
        [e.target.name]: e.target.value,
      },
    });
  };

  addStudent = (student) => {
    let newStudents = [
      ...this.state.students,
      {
        id: Math.floor(Math.random() * 10000),
        ...student,
      },
    ];
    localStorage.setItem("students", JSON.stringify(newStudents));
    this.setState({
      students: JSON.parse(localStorage.getItem("students")),
    });
  };

  deleteStudent = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      let newStudents = this.state.students.filter(
        (student) => student.id !== id
      );
      localStorage.setItem("students", JSON.stringify(newStudents));
      this.setState({
        students: JSON.parse(localStorage.getItem("students")),
      });
    }
  };

  editStudent = (id) => {
    let std = this.state.students.find((student) => student.id === id);
    this.setState({ studentToEdit: std });
    console.log(this.state.studentToEdit);
    this.handleOpen();
  };

  render() {
    const { students, student, search, modalOpen, studentToEdit } = this.state;

    return (
      <div className="container py-3">
        <div className="d-flex gap-3">
          <form onSubmit={this.handleSearchSubmit} className="d-flex w-75">
            <input
              className="form-control"
              type="text"
              name="search"
              id="search"
              placeholder="Search..."
              value={search}
              onChange={this.handleSearchChange}
            />
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </form>
          <select name="filter" id="filter" className="form-select w-25">
            <option value="all">All</option>
            <option value="N10">React N10</option>
            <option value="N14">React N14</option>
            <option value="N32">React N32</option>
          </select>
          <button
            onClick={this.handleOpen}
            className="btn btn-outline-success"
            style={{ whiteSpace: "nowrap" }}
          >
            Add student
          </button>
        </div>

        <AddStudent
          modalOpen={modalOpen}
          handleClose={this.handleClose}
          addStudent={this.addStudent}
          student={studentToEdit ? studentToEdit : student}
          handleStudentChange={this.handleStudentChange}
        />

        <StudentList
          students={students}
          handleDelete={this.deleteStudent}
          handleEdit={this.editStudent}
        />
      </div>
    );
  }
}

export default Students;
