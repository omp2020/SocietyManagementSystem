import React, { useState, Component } from "react"
import "../../css/members.css"
import Modal from "./Modal"

const Members = () => {
  const [tdata, setTdata] = useState([
    {
      memberID: "1122",
      flat: "105",
      owner: "Om",
      contact: "9876354238",
      parking: "2W-1,4W-0",
      status: "Rented",
    },
    {
      memberID: "1126",
      flat: "106",
      owner: "JD",
      contact: "9876321338",
      parking: "2W-0,4W-1",
      status: "Self",
    },
  ])

  const [modal, setModal] = useState(false)
  const [NewData, setNewData] = useState({
    memberID: "",
    flat: "",
    owner: "",
    contact: "",
    parking: "",
    status: "",
  })

  const handleNew = () => {
    setModal(true)
    console.log("Handle New Clicked")
  }

  return (
    <>
      <div className="container">
        <div className="h1 p-4">Members Page</div>
        <div className="row col-md-1 offset-md-10">
          <button
            className="m-2 btn btn-primary"
            data-toggle="modal"
            data-target="#Members_New"
            onClick={() => handleNew()}
          >
            + Add New
          </button>
          {modal ? <Modal data={NewData} type="addnew" from="members" /> : ""}
        </div>
        <div className="members">
          <table id="members" className="table">
            <thead className="thead-light">
              <tr>
                <th>Member ID</th>
                <th>Flat No.</th>
                <th>Owner</th>
                <th>Contact</th>
                <th>Parking</th>
                <th>Status</th>
                <th>Option</th>
              </tr>
            </thead>
            <tbody>
              {tdata.map((t) => (
                <TableData key={t.memberID} mem={t} />
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
      id: this.props.mem.memberID,
      flat: this.props.mem.flat,
      own: this.props.mem.owner,
      cont: this.props.mem.contact,
      park: this.props.mem.parking,
      stat: this.props.mem.status,
    },
    modal: {
      Edit: false,
      Delete: false,
    },
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
          <td>{this.state.data.id}</td>
          <td>{this.state.data.flat}</td>
          <td>{this.state.data.own}</td>
          <td>{this.state.data.cont}</td>
          <td>{this.state.data.park}</td>
          <td>{this.state.data.stat}</td>
          <td>
            <button
              type="button"
              class="btn btn-warning btn-sm"
              data-toggle="modal"
              data-target="#Edit"
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
              data-target="#Delete"
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
          <Modal data={this.state.data} type="edit" from="members" />
        ) : (
          ""
        )}
        {this.state.modal.Delete ? (
          <Modal data={this.state.data} type="delete" from="members" />
        ) : (
          ""
        )}
      </>
    )
  }
}

export default Members
