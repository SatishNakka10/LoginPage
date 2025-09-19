import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../features/authSlice";
import logo from '../assets/Horselogo.png';

<img className="logo" src={logo} alt="logo" />


const Login = () => {
  const [form, setform] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(login({ username: form.email.split("@")[0], email: form.email }));
    navigate("/dashboard");
  };

  return (
    <>
    <div className="top-title">
        <h1 className="main-title">SUPPLY CHAIN </h1>
    <h2 className="sub-title">in Plain Sight</h2>
    </div>
    
    <div className="container">
        
      <div className="card" style={{ padding: "20px" }}>
        <img className="logo" src={logo} alt="logo" />

        <h1 className="title">PEGASUS</h1>
        <h4 className="logistics">Logistics Group</h4>
        <h5 className="subtitle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l14 0" />
            <path d="M15 16l4 -4" />
            <path d="M15 8l4 4" />
          </svg>
          Already have an account ?
        </h5>
        <h3 className="loginhere">LOGIN HERE</h3>
        <form onSubmit={handlesubmit}>
          <div className="div-container">
            <input
            className="bordercolor"
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setform({ ...form, email: e.target.value })}
            ></input>
            <br />
            <br />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-user"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg>
          </div>

          <div className="div-container">
            <input
              className="bordercolor"
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setform({ ...form, password: e.target.value })}
            ></input>
            <br />
            <br />
            <svg
              className="password"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-eye-off"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
              <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />
              <path d="M3 3l18 18" />
            </svg>
          </div>
          <div className="remember">
            <input   className="bordercolor" type="checkbox" id="remember" name="remember" />
            <label className="rememberme" htmlFor="remember">Remember Me <span className="forgotpassword">Forgot Password?</span></label>
            
          </div>

          <button type="submit" className="loginbutton">
            LOG IN
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;
