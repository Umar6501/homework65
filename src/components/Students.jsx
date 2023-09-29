// import React, { Component } from "react";
// import AddStudent from "./AddStudent";
// import StudentList from "./StudentList";

// export class Students extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       person: JSON.parse(localStorage.getItem("student")) || [],
//       search: "",
//       show: false,
//     };
//   }

//   addStudent = (person) => {
//     // e.preventDefault();
//     let newStudent = [
//       ...this.state.person,
//       {
//         id: Math.floor(Math.random() * 100000),
//         ...person,
//       },
//     ];

//     localStorage.setItem("student", JSON.stringify(newStudent));
//     this.setState({
//       person: JSON.parse(localStorage.getItem("student")),
//     });
//   };

//   deleteStudent = (id) => {
//     let newStudent = this.state.person.filter((el) => el.id !== id);
//     localStorage.setItem("student", JSON.stringify(newStudent));
//     this.setState({
//       person: JSON.parse(localStorage.getItem("student")),
//     });
//   };

//   handleShow = () => {
//     this.setState({ show: true });
//   };

//   handleClose = () => {
//     this.setState({ show: false });
//   };

//   handleEditShow = () => {
//     this.setState({ show: true });
//   };
//   editChange = () => {
//     this.handleEditShow();
//   };

//   render() {
//     const { show, person } = this.state;
//     return (
//       <div className="container">
//         <div className="mt-3 d-flex gap-2 justify-content-between">
//           <form className="w-70">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Search..."
//             />
//           </form>
//           <div className="form-group">
//             <select
//               name="gender"
//               id="gender"
//               className="form-select form-control"
//               onChange={(e) => this.setState({ gender: e.target.value })}
//             >
//               <option value="">Gender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//             </select>
//           </div>
//           <button className="btn btn-primary" onClick={this.handleShow}>
//             Add Contact
//           </button>
//         </div>
//         <AddStudent
//           show={show}
//           handleClose={this.handleClose}
//           person={person}
//           addStudent={this.addStudent}
//         />
//         <StudentList
//           show={show}
//           handleClose={this.handleClose}
//           person={this.state.person}
//           deleteStudent={this.deleteStudent}
//         />
//       </div>
//     );
//   }
// }

// export default Students;
import React, { useState } from "react";
import AddStudent from "./AddStudent";
import StudentList from "./StudentList";

const Students = () => {
  const [person, setPerson] = useState(
    JSON.parse(localStorage.getItem("student")) || []
  );
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);

  const addStudent = (newPerson) => {
    let newStudent = [
      ...person,
      {
        id: Math.floor(Math.random() * 100000),
        ...newPerson,
      },
    ];

    localStorage.setItem("student", JSON.stringify(newStudent));
    setPerson(JSON.parse(localStorage.getItem("student")));
  };

  const deleteStudent = (id) => {
    let newStudent = person.filter((el) => el.id !== id);
    localStorage.setItem("student", JSON.stringify(newStudent));
    setPerson(JSON.parse(localStorage.getItem("student")));
  };

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleEditShow = () => {
    setShow(true);
  };

  // const editChange = () => {
  //   handleEditShow();
  // };

  return (
    <div className="container">
      <div className="mt-3 d-flex gap-2 justify-content-between">
        <form className="w-75">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <div className="form-group">
          <select
            name="gender"
            id="gender"
            className="form-select form-control"
            onChange={(e) => setSearch(e.target.value)}
          >
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <button className="btn btn-primary" onClick={handleShow}>
          Add Contact
        </button>
      </div>
      <AddStudent
        show={show}
        handleClose={handleClose}
        person={person}
        addStudent={addStudent}
      />
      <StudentList
        show={show}
        handleClose={handleClose}
        person={person}
        deleteStudent={deleteStudent}
      />
    </div>
  );
};

export default Students;
