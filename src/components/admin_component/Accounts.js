import React, { useState, useEffect, Component } from "react"
import Modal from "./Modal"
import Axios from "axios"
import links from "../../links.json"
import ReactLoading from "react-loading"

const Accounts = () => {
  const [tdata, setTdata] = useState([])
  const [loader, setLoader] = useState(true)
  useEffect(() => {
    Axios.get(links.home + links.accounts, {
      params: { society_id: 1 },
      headers: {
        Authorization: `token ${links.token}`,
      },
    })
      .then((res) => {
        setTdata(res.data)
        setLoader(false)
      })
      .catch((err) => console.log("Error", err))
  }, [])
  const [modal, setModal] = useState(false)
  const [NewData, setNewData] = useState({
    TransId: "",
    DateTime: "",
    Mode: "",
    Amount: "",
    Remark: "",
  })

  const handleNew = () => {
    setModal(true)
    console.log("Handle New Clicked")
  }

  return (
    <>
      <div className="container">
        <div className="h1 p-4">Accounts</div>
        <div className="d-flex justify-content-center">
          {loader ? (
            <ReactLoading type="bars" color="black" height={55} width={90} />
          ) : (
            ""
          )}
        </div>
        <div className="row col-md-1 offset-md-10">
          <button
            className="m-2 btn btn-primary"
            data-toggle="modal"
            data-target="#Account_New"
            onClick={() => handleNew()}
          >
            + Add New
          </button>
          {modal ? <Modal data={NewData} type="addnew" from="Account" /> : ""}
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
                <TableData key={t.TransId} mem={t} />
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
      TransId: this.props.mem.id,
      DateTime: this.props.mem.date_time,
      Mode: this.props.mem.mode,
      Amount: this.props.mem.amount,
      Remark: this.props.mem.remark,
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
          <td>
            {this.state.data.DateTime.split("T")[0]}{" "}
            {this.state.data.DateTime.split("T")[1].slice(0, 8)}
          </td>
          <td>{this.state.data.Mode ? "Credit" : "Debit"}</td>
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
