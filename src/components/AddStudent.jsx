import { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export class AddStudent extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addStudent(this.props.student);
    console.log(this.props.student);
    this.props.handleClose();
  };

  render() {
    const { modalOpen, handleClose, student, handleStudentChange } = this.props;
    return (
      <Modal show={modalOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="firstName">Firstname</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={student.firstName}
                onChange={handleStudentChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName">Lastname</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={student.lastName}
                onChange={handleStudentChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="group">Group</label>
              <input
                type="text"
                name="group"
                id="group"
                value={student.group}
                onChange={handleStudentChange}
                className="form-control"
              />
            </div>
            <div className="form-check mb-3">
              <label htmlFor="doesWork" className="form-check-label">
                Does work?
              </label>
              <input
                type="checkbox"
                name="doesWork"
                id="doesWork"
                checked={student.doesWork}
                onChange={handleStudentChange}
                className="form-check-input"
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit" variant="primary" onClick={this.handleSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default AddStudent;
