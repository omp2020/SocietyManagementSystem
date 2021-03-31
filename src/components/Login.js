import React, { useState } from "react"
import "../css/login.css"
import Field from "./Field"
import { Redirect } from "react-router-dom"
import firebase from "firebase"

const Login = () => {
  const [loginData, setLD] = useState({
    username: "",
    password: "",
    cpassword: "",
  })
  const [error, setError] = useState()
  const [signup, setSignup] = useState(false)

  const changeVal = (e, field) => {
    let val = e.target.value
    switch (field) {
      case "username":
        setLD({ ...loginData, username: val })
        break
      case "password":
        setLD({ ...loginData, password: val })
        break
      case "cpass":
        setLD({ ...loginData, cpassword: val })
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
        errorCode === "auth/user-not-found"
          ? setError({ status: true, value: "User Not Found" })
          : setError({ status: false, value: "" })
        var errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
  }

  const makeSignin = () => {
    if (loginData.cpassword === loginData.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(loginData.username, loginData.password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user
          console.log(user.uid)
          setError({ status: true, value: "User Login Created Successfully" })
        })
        .catch((error) => {
          var errorCode = error.code
          var errorMessage = error.message
          errorCode === "auth/weak-password"
            ? setError({
                status: true,
                value: "The Password is weak (Minimul Length = 6)",
              })
            : setError({ status: false, value: "" })
          errorCode === "auth/invalid-email"
            ? setError({
                status: true,
                value: "The Emai Id is badly formatted",
              })
            : setError({ status: false, value: "" })
          console.log("ErrorCode: ", errorCode)
          console.log("ErrorMessage", errorMessage)
          // ..
        })
    } else {
      setError({
        status: true,
        value: "Confirm password and Password are different",
      })
    }
  }

  return (
    <>
      <div className="container mt-5 h-100">
        <div className="row align-self-center h-100">
          {error ? (
            <div
              class="alert alert-danger alert-dismissible fade show align-content-center offset-sm-5"
              role="alert"
            >
              <strong>{error.value}</strong>
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
          <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
            <div className="card h-100 card-primary justify-content-center">
              <div className="login-brand align-self-center p-3">
                <b className="h4">Society Management System</b>
              </div>
              {signup ? (
                <div className="card-body">
                  <div className="card-header">
                    <a
                      className="btn btn-outline-info"
                      onClick={() => setSignup(false)}
                    >
                      <span>Login</span>
                    </a>
                    <a
                      className="btn btn-outline-info offset-sm-5"
                      onClick={() => setSignup(true)}
                    >
                      <span>Sign Up</span>
                    </a>
                  </div>
                  <div className="form-group">
                    <Field
                      legend="Email"
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
                    <Field
                      legend="Confirm Password"
                      itype="password"
                      type="login"
                      onChange={(e) => changeVal(e, "password")}
                      name="password"
                    />
                  </div>
                  <button
                    className="btn btn-primary"
                    onClick={() => makeSignin()}
                  >
                    Signup
                  </button>
                  {isLogin ? <Redirect to="/admin" /> : ""}
                </div>
              ) : (
                <div className="card-body">
                  <div className="card-header">
                    <a
                      className="btn btn-outline-info"
                      onClick={() => setSignup(false)}
                    >
                      <span>Login</span>
                    </a>
                    <a
                      className="btn btn-outline-info offset-sm-5"
                      onClick={() => setSignup(true)}
                    >
                      <span>Sign Up</span>
                    </a>
                  </div>
                  <div className="form-group">
                    <Field
                      legend="Email"
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

                  <button
                    className="btn btn-primary"
                    onClick={() => makeLogin()}
                  >
                    Login
                  </button>

                  {isLogin ? <Redirect to="/admin" /> : ""}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
