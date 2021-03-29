import React, { useState } from "react"

const Modal = ({ data, type, from }) => {
  let [d, setData] = useState(data)

  const changeVal = (e, id, t, f) => {
    let val = e.target.value
    if (t === "addnew" && f === "members") {
      switch (id) {
        case "Name":
          setData({ ...d, owner: val })
          break
        case "Flat":
          setData({ ...d, flat: val })
          break
        case "Contact":
          setData({ ...d, contact: val })
          break
        case "Parking":
          setData({ ...d, parking: val })
          break
        case "sel1":
          setData({ ...d, status: val })
          break
        default:
          break
      }
    } else if (t === "edit" && f === "members") {
      switch (id) {
        case "Name":
          setData({ ...d, own: val })
          break
        case "Flat":
          setData({ ...d, flat: val })
          break
        case "Contact":
          setData({ ...d, cont: val })
          break
        case "Parking":
          setData({ ...d, park: val })
          break
        case "sel1":
          setData({ ...d, stat: val })
          break
        default:
          break
      }
    } else if (t === "edit" && f === "Services") {
      switch (id) {
        case "Name":
          setData({ ...d, name: val })
          break
        case "Desig":
          setData({ ...d, desig: val })
          break
        case "Contact":
          setData({ ...d, contact: val })
          break
        default:
          break
      }
    } else if (t === "addnew" && f === "Account") {
      switch (id) {
        case "Transaction":
          setData({ ...d, TransId: val })
          break
        case "DateTime":
          setData({ ...d, DateTime: val })
          break
        case "sel1":
          setData({ ...d, Mode: val })
          break
        case "Amount":
          setData({ ...d, Amount: val })
          break
        case "Remark":
          setData({ ...d, Remark: val })
          break
        default:
          break
      }
    } else if (t === "addnew" && f === "Services") {
      switch (id) {
        case "Name":
          setData({ ...d, name: val })
          break
        case "Desig":
          setData({ ...d, desig: val })
          break
        case "Contact":
          setData({ ...d, contact: val })
          break
        default:
          break
      }
    }
  }
  return (
    <>
      {type === "addnew" ? (
        from === "members" ? (
          <div
            class="modal fade"
            id="Members_New"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Enter New Data
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <div class="col">
                      <label for="Name" class="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        type="Name"
                        placeholder={d.owner}
                        onChange={(e) => {
                          changeVal(e, "Name", type, from)
                        }}
                      />
                    </div>
                    <div class="col">
                      <label for="Flat" class="form-label">
                        Flat
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        type="Flat"
                        placeholder={d.flat}
                        onChange={(e) => changeVal(e, "Flat", type, from)}
                      />
                    </div>
                    <div class="col">
                      <label for="Contact" class="form-label">
                        Contact
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        type="Contact"
                        placeholder={d.contact}
                        onChange={(e) => {
                          changeVal(e, "Contact", type, from)
                        }}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <label for="Parking" class="form-label">
                        Parking
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        type="Parking"
                        placeholder={d.parking}
                        onChange={(e) => {
                          changeVal(e, "Parking", type, from)
                        }}
                      />
                    </div>
                    <div className="col">
                      <label for="Status" class="form-label">
                        Status
                      </label>
                      <select
                        class="form-control"
                        type="sel1"
                        onChange={(e) => {
                          changeVal(e, "sel1", type, from)
                        }}
                      >
                        <option placeholder="1">Rented</option>
                        <option placeholder="2">Self</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={() => {
                      console.log("Modal Submit Clicked")
                    }}
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : from === "Account" ? (
          <div
            class="modal fade"
            id="Account_New"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Enter New Transaction
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <div class="col">
                      <label for="Transaction" class="form-label">
                        Transaction Id
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="Transaction"
                        onChange={(e) => {
                          changeVal(e, "Transaction", type, from)
                        }}
                      />
                    </div>
                    <div class="col">
                      <label for="DateTime" class="form-label">
                        Date Time
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="DateTime"
                        onChange={(e) => {
                          changeVal(e, "DateTime", type, from)
                        }}
                      />
                    </div>
                    <div className="col">
                      <label for="Mode" class="form-label">
                        Mode
                      </label>
                      <select
                        class="form-control"
                        type="sel1"
                        onChange={(e) => {
                          changeVal(e, "sel1", type, from)
                        }}
                      >
                        <option placeholder="1">Credit</option>
                        <option placeholder="2">Debit</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <label for="Amount" class="form-label">
                        Amount
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="Amount"
                        onChange={(e) => {
                          changeVal(e, "Amount", type, from)
                        }}
                      />
                    </div>
                    <div className="col">
                      <label for="Remark" class="form-label">
                        Remark
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="Remark"
                        onChange={(e) => {
                          changeVal(e, "Remark", type, from)
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={() => {
                      console.log("Modal Submit Clicked")
                    }}
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            class="modal fade"
            id="Service_New"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Enter New Service Member
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <div class="col">
                      <label for="Name" class="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="Name"
                        placeholder={d.name}
                        onChange={(e) => {
                          changeVal(e, "Name", type, from)
                        }}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <label for="Designation" class="form-label">
                        Designation
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="Designation"
                        placeholder={d.desig}
                        onChange={(e) => {
                          changeVal(e, "Desig", type, from)
                        }}
                      />
                    </div>
                    <div className="col">
                      <label for="Contact" class="form-label">
                        Contact
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="Contact"
                        placeholder={d.contact}
                        onChange={(e) => {
                          changeVal(e, "Contact", type, from)
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      ) : (
        ""
      )}
      {from === "members" ? (
        type === "edit" ? (
          <div
            class="modal fade"
            id="Edit"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Edit data for {d.own}
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <div class="col">
                      <label for="Name" class="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="Name"
                        placeholder={d.own}
                        onChange={(e) => {
                          changeVal(e, "Name", type, from)
                        }}
                      />
                    </div>
                    <div class="col">
                      <label for="Flat" class="form-label">
                        Flat
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="Flat"
                        placeholder={d.flat}
                        onChange={(e) => {
                          changeVal(e, "Flat", type, from)
                        }}
                      />
                    </div>
                    <div class="col">
                      <label for="Contact" class="form-label">
                        Contact
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="Contact"
                        placeholder={d.cont}
                        onChange={(e) => {
                          changeVal(e, "Contact", type, from)
                        }}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <label for="Parking" class="form-label">
                        Parking
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="Parking"
                        placeholder={d.park}
                        onChange={(e) => {
                          changeVal(e, "Parking", type, from)
                        }}
                      />
                    </div>
                    <div className="col">
                      <label for="Status" class="form-label">
                        Status
                      </label>
                      <select class="form-control" id="sel1">
                        <option>Rented</option>
                        <option>Self</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={() => {
                      console.log("Modal Submit Clicked")
                    }}
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            class="modal fade"
            id="Delete"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Delete data for {d.own}
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  Are you sure you want to delete this user?
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={() => {
                      console.log("Modal Submit Clicked")
                    }}
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      ) : type === "edit" ? (
        <div
          class="modal fade"
          id="Services_Edit"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Edit data for {d.name}
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col">
                    <label for="Name" class="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="Name"
                      placeholder={d.name}
                      onChange={(e) => {
                        changeVal(e, "Name", type, from)
                      }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label for="Designation" class="form-label">
                      Designation
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="Designation"
                      placeholder={d.desig}
                      onChange={(e) => {
                        changeVal(e, "Desig", type, from)
                      }}
                    />
                  </div>
                  <div className="col">
                    <label for="Contact" class="form-label">
                      Contact
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="Contact"
                      placeholder={d.contact}
                      onChange={(e) => {
                        changeVal(e, "Contact", type, from)
                      }}
                    />
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          class="modal fade"
          id="Services_Delete"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Delete data for {d.name}
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                Are you sure you want to delete this user?
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => {
                    console.log("Modal Submit Clicked")
                  }}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {from === "Account" ? (
        type === "delete" ? (
          <div
            class="modal fade"
            id="Account_Delete"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Delete data for TransactionID: {d.TransId}
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  Are you sure you want to delete this user?
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={() => {
                      console.log("Modal Submit Clicked")
                    }}
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )
      ) : (
        ""
      )}
    </>
  )
}

export default Modal
