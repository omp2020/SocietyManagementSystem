import React, { useState } from "react"
import "../css/login.css"
import Field from "./Field"
import { Redirect } from "react-router-dom"
import firebase from "firebase"

const Login = () => {
  const [loginData, setLD] = useState({ username: "", password: "" })
  const [error, setError] = useState()

  const changeVal = (e, field) => {
    let val = e.target.value
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

  const makeLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(loginData.username, loginData.password)
      .then((userCredential) => {
        sessionStorage.setItem("isLogin", true)
        setLogin(true)
        sessionStorage.setItem("society_id", userCredential.user.uid)
      })
      .catch((error) => {
        var errorCode = error.code
        errorCode === "auth/user-not-found" ? setError(true) : setError(false)
        var errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
  }

  return (
    <>
      <div className="container mt-5 h-100">
        <div className="row align-self-center h-100">
          <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
            {error ? (
              <div
                class="alert alert-warning alert-dismissible fade show align-content-center"
                role="alert"
              >
                <strong>User not Found</strong>
                <button
                  type="button"
                  class="close"
                  data-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            ) : (
              ""
            )}
            <div className="card h-100 card-primary justify-content-center">
              <div className="login-brand align-self-center p-3">
                <b className="h4">Society Management System</b>
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
