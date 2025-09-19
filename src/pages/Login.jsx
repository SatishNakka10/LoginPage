import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../features/authSlice";
import { Form, Input } from "antd"; // Ant Design
import logo from '../assets/Horselogo.png';

const Login = () => {
  const [form, setform] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlesubmit = (values) => {
    dispatch(login({ username: values.email.split("@")[0], email: values.email }));
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M15 16l4 -4" />
              <path d="M15 8l4 4" />
            </svg>
            Already have an account ?
          </h5>
          <h3 className="loginhere">LOGIN HERE</h3>

          {/* Ant Design Form */}
          <Form
            name="loginForm"
            onFinish={handlesubmit}
            layout="vertical"
          >
            {/* Email Field */}
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input
                placeholder="Email"
                className="bordercolor"
                onChange={(e) => setform({ ...form, email: e.target.value })}
              />
            </Form.Item>

            {/* Password Field */}
            <Form.Item
              name="password"
              rules={[{ required: true, message: "Please input your password!" }]}
            >
              <Input.Password
                placeholder="Password"
                className="bordercolor"
                onChange={(e) => setform({ ...form, password: e.target.value })}
              />
            </Form.Item>

            {/* Remember Me Checkbox */}
         <div className="remember">
  <input
    className="bordercolor"
    type="checkbox"
    id="remember"
    name="remember"
  />
  <label className="rememberme" htmlFor="remember">
    Remember Me <span className="forgotpassword">Forgot Password?</span>
  </label>
</div>


            {/* Submit Button */}
            <button type="submit" className="loginbutton">
              LOG IN
            </button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
