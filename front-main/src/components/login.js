import React, {useState} from "react";
import "./login.css";
import log from "./img/log.svg";
import register from "./img/register.svg";
import { withRouter } from "react-router-dom";
import {userLogin} from '../api/authenticationService';

const Login = (props) => {

  const [invalidLoginAttempt, setInvalidLoginAttempt] = useState(false);

  const [values, setValues] = useState({
    username: '',
    password: ''
    });
  
  function handleLogin(e) {
    e.preventDefault();
    userLogin(values).then((response)=>{
      
      console.log("response",response);
      if(response.status===200){
          localStorage.setItem('USER_KEY', response.data.token)
          setInvalidLoginAttempt(false);
          props.history.push('/dashboard');
      } else {
        localStorage.clear();
        console.log('hello from the wrong one ')
        setInvalidLoginAttempt(true);
      }

  }).catch((err)=>{
    localStorage.clear();
    setInvalidLoginAttempt(true);
      if(err && err.response){
      
      switch(err.response.status){
          case 401:
              break;
          default:
      }

      }
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

  const handleChange = (e) => {
    e.persist();
    setValues(values => ({
    ...values,
    [e.target.name]: e.target.value
    }));
};

const Results = () => (
  <p className="social-text">Invalid credentials! Please try again</p>
)

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" value={values.username} onChange={handleChange} name="username" required/>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" value={values.password} onChange={handleChange} name = "password" required />
            </div>
            { invalidLoginAttempt ? <Results /> : null }
            <button
              onClick={handleLogin}
              className="btn solid"
              id="sign-up-btn2">
              Login
            </button>
            <p className="social-text">Or Sign in with social platforms</p>
          </form>
          <form className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
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
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
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
