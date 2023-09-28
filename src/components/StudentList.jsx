import React, { Component } from "react";

export class StudentList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const { person, deleteContact, editChange } = this.props;
    return (
      <div>
        <table className="w-100 mt-3 table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Firstname</th>
              <th>LastName</th>
              <th>Phone</th>
              <th>Jins</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {person.length > 0
              ? this.props.person.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.phone}</td>
                    <td>{item.gender}</td>
                    <td className="d-flex gap-3">
                      <button className="btn btn-success">Edit</button>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteContact(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StudentList;
