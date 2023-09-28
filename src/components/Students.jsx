import React, { Component } from "react";
import AddStident from "./AddStudent";
import StudentList from "./StudentList";

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: JSON.parse(localStorage.getItem("contact")) || [],
      search: "",
      show: false,
    };
  }

  addContact = (person) => {
    // e.preventDefault();
    let newContact = [
      ...this.state.person,
      {
        id: Math.floor(Math.random() * 100000),
        ...person,
      },
    ];

    localStorage.setItem("contact", JSON.stringify(newContact));
    this.setState({
      person: JSON.parse(localStorage.getItem("contact")),
    });
  };

  deleteContact = (id) => {
    let newContact = this.state.person.filter((el) => el.id !== id);
    localStorage.setItem("contact", JSON.stringify(newContact));
    this.setState({
      person: JSON.parse(localStorage.getItem("contact")),
    });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleEditShow = () => {
    this.setState({ show: true });
  };
  editChange = () => {
    this.handleEditShow();
  };

  render() {
    const { show, person } = this.state;
    return (
      <div className="container">
        <div className="mt-3 d-flex gap-2 justify-content-between">
          <form className="w-75">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
            />
          </form>
          <div className="form-group">
            <select
              name="gender"
              id="gender"
              className="form-select form-control"
              onChange={(e) => this.setState({ gender: e.target.value })}
            >
              <option value="">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <button className="btn btn-primary" onClick={this.handleShow}>
            Add Contact
          </button>
        </div>
        <AddStident
          show={show}
          handleClose={this.handleClose}
          person={person}
          addContact={this.addContact}
        />
        <StudentList
          show={show}
          handleClose={this.handleClose}
          person={this.state.person}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default Contact;
