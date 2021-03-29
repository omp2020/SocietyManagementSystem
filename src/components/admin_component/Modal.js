import React, { useState } from "react"

const Modal = ({ data, type, from }) => {
  const [d, setData] = useState(data)
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
                        value={d.owner}
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
                        value={d.flat}
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
                        value={d.contact}
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
                        value={d.parking}
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
        ) : (
          "HEllo"
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
                        value={d.own}
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
                        value={d.flat}
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
                        value={d.cont}
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
                        value={d.park}
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
                      value={d.name}
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
                      value={d.desig}
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
                      value={d.contact}
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
