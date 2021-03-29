import React, { useState, Component } from "react"
import Modal from "./Modal"

const Services = () => {
  const [tdata, setTdata] = useState([
    {
      name: "Om",
      contact: "9876354238",
      designation: "Secretary",
    },
    {
      name: "JD",
      contact: "9873498238",
      designation: "Temp",
    },
  ])

  const [modal, setModal] = useState({ Edit: false, Delete: false })

  const handleEdit = (id) => {
    console.log(id)
    setModal({ Edit: true, Delete: false })
  }

  return (
    <>
      <div className="container">
        <div className="h1 p-4">Service Page</div>
        <div className="row col-md-1 offset-md-10">
          <button
            className="m-2 btn btn-primary"
            onClick={() => {
              console.log("Add New Clicked")
            }}
          >
            + Add New
          </button>
        </div>
        <div className="members">
          <table id="members" className="table">
            <thead className="thead-light">
              <tr>
                <th>Name</th>
                <th>Designation</th>
                <th>Contact</th>
                <th>Option</th>
              </tr>
            </thead>
            <tbody>
              {tdata.map((t) => (
                <TableData key={t.name} mem={t} handleEdit={handleEdit} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

class TableData extends Component {
  state = {
    data: {
      name: this.props.mem.name,
      contact: this.props.mem.contact,
      desig: this.props.mem.designation,
    },
    modal: { Edit: false, Delete: false },
  }

  handleEdit = () => {
    console.log(this.state)
    this.setState({ modal: { Edit: true, Delete: false } })
  }

  handleDelete = () => {
    console.log("From Delete: ", this.state)
    this.setState({ modal: { Edit: false, Delete: true } })
  }

  render() {
    return (
      <>
        <tr>
          <td>{this.state.data.name}</td>
          <td>{this.state.data.desig}</td>
          <td>{this.state.data.contact}</td>
          <td>
            <button
              type="button"
              class="btn btn-warning btn-sm"
              data-toggle="modal"
              data-target="#Services_Edit"
              onClick={() => {
                this.handleEdit()
              }}
            >
              Edit
            </button>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              data-toggle="modal"
              data-target="#Services_Delete"
              style={{ marginLeft: "5px" }}
              onClick={() => {
                this.handleDelete()
              }}
            >
              Delete
            </button>
          </td>
        </tr>
        {this.state.modal.Edit ? (
          <Modal data={this.state.data} type="edit" from="Services" />
        ) : (
          ""
        )}
        {this.state.modal.Delete ? (
          <Modal data={this.state.data} type="delete" from="Services" />
        ) : (
          ""
        )}
      </>
    )
  }
}

export default Services
