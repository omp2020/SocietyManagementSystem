import React from "react"
import Logo from "../../img/Logo.png"
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <>
      <nav
        className="col-md-2 d-none d-md-block bg-light sidebar offcanvas-collapse"
        id="navbarsExampleDefault"
      >
        <div className="sidebar-sticky">
          <img src={Logo} alt="Logo" style={{ width: "50px" }} />
          <ul className="nav flex-column">
            <li className="nav nav-item">
              <Link to="/admin">
                <SidebarComponent text="Admin Dashboard" />
              </Link>
            </li>
            <li className="nav nav-item">
              <Link to="/admin/members">
                <SidebarComponent text="Members" />
              </Link>
            </li>
            <li className="nav nav-item">
              <Link to="/admin/accounts">
                <SidebarComponent text="Accounts" />
              </Link>
            </li>
            {/* <li className="nav nav-item">
              <SidebarComponent text="Payment" />
            </li> */}
            <li className="nav nav-item">
              <Link to="/admin/services">
                <SidebarComponent text="Services" />
              </Link>
            </li>
            {/* <li className="nav nav-item">
              <SidebarComponent text="Complaints" />
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  )
}

const SidebarComponent = ({ text }) => {
  return (
    <>
      <div
        style={{
          padding: "10px",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <span>{text}</span>
      </div>
    </>
  )
}

export default Sidebar
