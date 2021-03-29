import React, { useState, Component } from "react"
import Modal from "./Modal"

const Accounts = () => {
  const [tdata, setTdata] = useState([
    {
      TransId: "1204",
      DateTime: "23-Nov-2020 13:00",
      Mode: "Credit",
      Amount: "Rs. 5000",
      Remark: "Null",
    },
    {
      TransId: "4854",
      DateTime: "23-Nov-2020 13:45",
      Mode: "Debit",
      Amount: "Rs. 5050",
      Remark: "Null",
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
        <div className="h1 p-4">Accounts Page</div>
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
                <th>Transaction Id</th>
                <th>Date Time</th>
                <th>Mode</th>
                <th>Amount</th>
                <th>Remark</th>
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
      TransId: this.props.mem.TransId,
      DateTime: this.props.mem.DateTime,
      Mode: this.props.mem.Mode,
      Amount: this.props.mem.Amount,
      Remark: this.props.mem.Remark,
    },
    modal: { Delete: false },
  }

  handleDelete = () => {
    console.log("From Delete: ", this.state)
    this.setState({ modal: { Delete: true } })
  }

  render() {
    return (
      <>
        <tr>
          <td>{this.state.data.TransId}</td>
          <td>{this.state.data.DateTime}</td>
          <td>{this.state.data.Mode}</td>
          <td>{this.state.data.Amount}</td>
          <td>{this.state.data.Remark}</td>
          <td>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              data-toggle="modal"
              data-target="#Account_Delete"
              style={{ marginLeft: "5px" }}
              onClick={() => {
                this.handleDelete()
              }}
            >
              Delete
            </button>
          </td>
        </tr>
        {this.state.modal.Delete ? (
          <Modal data={this.state.data} type="delete" from="Account" />
        ) : (
          ""
        )}
      </>
    )
  }
}

export default Accounts
