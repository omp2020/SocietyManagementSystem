import React, { useEffect, useState } from "react"
import axios from "axios"
import Logo from "../img/Logo.png"
import "../css/login.css"
import Field from "./Field"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
} from "react-router-dom"

const Login = () => {
  const [loginData, setLD] = useState({ username: "", password: "" })

  const changeVal = (e, field) => {
    let val = e.target.value
    console.log(field, val)
    switch (field) {
      case "username":
        setLD({ ...loginData, username: val })
        break
      case "password":
        setLD({ ...loginData, password: val })
        break
      default:
        break
    }
  }

  const [isLogin, setLogin] = useState(false)

  const [doLogin, setDologin] = useState()
  useEffect(() => {
    // Update the document title using the browser API
    setDologin(false)
  })

  const makeLogin = () => {
    console.log("Login Clicked")
    console.log(loginData)
    if (loginData.username === "Om" && loginData.password === "Test123") {
      setDologin(true)
      setLogin(true)
    }
  }

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
            <div className="card card-primary">
              <div className="login-brand offset-sm-5">
                <img
                  src={Logo}
                  alt="Logo"
                  style={{
                    marginTop: "3px",
                    width: "50px",
                  }}
                />
              </div>
              <div className="card-body">
                <div className="card-header">
                  <span>Login</span>
                </div>
                <div className="form-group">
                  <Field
                    legend="Username"
                    itype="text"
                    type="login"
                    onChange={(e) => changeVal(e, "username")}
                    name="username"
                  />
                  <Field
                    legend="Password"
                    itype="password"
                    type="login"
                    onChange={(e) => changeVal(e, "password")}
                    name="password"
                  />
                </div>

                <button className="btn btn-primary" onClick={() => makeLogin()}>
                  Login
                </button>
                {isLogin ? <Redirect to="/admin" /> : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
