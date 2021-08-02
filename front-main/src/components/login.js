import React, { useState } from "react";
import "./login.css";
import log from "./img/untitled1.svg";
import register from "./img/untitled2.svg";
import { withRouter } from "react-router-dom";
import { userLogin, userSignup } from "../api/authenticationService";
import { useToast } from "@chakra-ui/react"

const Login = (props) => {
  const [invalidLoginAttempt, setInvalidLoginAttempt] = useState(false);
  const toast = useToast()

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const [signInValues, setSignInValues] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    uniqueKey: "",
  });

  const handleSigninValues = (e) => {
    e.persist();
    setSignInValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  function clearSigninValues(){
    setSignInValues({
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      uniqueKey: "",
    });
  }

  function handleSignup(e) {
    e.preventDefault();
    console.log(signInValues);
    userSignup(signInValues).then((response) => {
      if(response.status === 200){
        clearSigninValues()
        toast({
          title: "Succeeded!.",
          description: response.data,
          status: "success",
          duration: 5000,
          isClosable: true,
        })
        handleSigninButton()
      } else {
        console.log('Invalid')
        console.log(response.status)
      }
    }).catch((err) => {
      console.log(err);
      console.log(err.response.data)
      toast({
        title: "Invalid sign up credentials.",
        description: err.response.data,
        status: "error",
        duration: 5000,
        isClosable: true,
      })
      
    });
  }

  function handleLogin(e) {
    e.preventDefault();
    userLogin(values)
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("USER_KEY", response.data.token);
          setInvalidLoginAttempt(false);
          props.history.push("/dashboard");
        } else {
          localStorage.clear();
          console.log("hello from the wrong one ");
          setInvalidLoginAttempt(true);
        }
      })
      .catch((err) => {
        localStorage.clear();
        setInvalidLoginAttempt(true);
      });
  }

  function handleSignupButton() {
    const container = document.querySelector(".container");
    container.classList.add("sign-up-mode");
  }

  function handleSigninButton() {
    const container = document.querySelector(".container");
    container.classList.remove("sign-up-mode");
  }

  const Results = () => (
    <p className="social-text">Invalid credentials! Please try again</p>
  );

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                value={values.username}
                onChange={handleChange}
                name="username"
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                name="password"
                required
              />
            </div>
            {invalidLoginAttempt ? <Results /> : null}
            <button
              onClick={handleLogin}
              className="btn solid"
              id="sign-up-btn2"
            >
              Login
            </button>
            {/* <p className="social-text">Or Sign in with social platforms</p> */}
          </form>
          <form className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                value={signInValues.username}
                onChange={handleSigninValues}
                name="username"
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                value={signInValues.password}
                onChange={handleSigninValues}
                name="password"
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                type="text"
                placeholder="Firstname"
                value={signInValues.firstName}
                onChange={handleSigninValues}
                name="firstName"
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                type="text"
                placeholder="lastname"
                value={signInValues.lastName}
                onChange={handleSigninValues}
                name="lastName"
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                type="number"
                placeholder="Unique key"
                value={signInValues.uniqueKey}
                onChange={handleSigninValues}
                name="uniqueKey"
                required
              />
            </div>
            <button type="submit"
              className="btn solid"
              value="Sign up"
              onClick={handleSignup}>Sign up</button>
              
            
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Welcome to The Diner Club. We share recipies, build communicaties and eat like royals
            </p>
            <button
              onClick={handleSignupButton}
              className="btn transparent"
              id="sign-up-btn"
            >
              Sign up
            </button>
          </div>
          <img src={log} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Want to become one of us?</h3>
            <p>
              If you have received a Unique key from one of our elite members, you can use that
              to create your own account
            </p>
            <button
              onClick={handleSigninButton}
              className="btn transparent"
              id="sign-in-btn"
            >
              Sign in
            </button>
          </div>
          <img src={register} className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
