// src/pages/Register.jsx
import React, { useState } from "react";
import { register } from "../features/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import logo from '../assets/Horselogo.png';

// Ant Design imports
import { Form, Input, Button, Select } from "antd";

const { Option } = Select;

const Register = () => {
  const [form, setForm] = useState({
    loginId: "",
    firstName: "",
    lastName: "",
    country: "us",
    businessPhone: "",
    mobilePhone: "",
    email: "",
    companyName: "",
    password: "",
    confirmPassword: "",
    captcha: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlesubmit = () => {
    dispatch(register(form));
    navigate("/dashboard");
  };

  return (
    <>
      <div className="top-title">
        <h1 className="main-title">SUPPLY CHAIN </h1>
        <h2 className="sub-title">in Plain Sight</h2>
      </div>
      <div className="container1">
        <div className="register-form">
          <div className="sidelogo1">
            <span className="registration">
              <h1>REGISTRATION</h1>
            </span>
            <div>
              <img className="logo1" src={logo} alt="logo" />
              <h1 className="title1">PEGASUS</h1>
              <h4 className="logistics1">Logistics Group</h4>
            </div>
          </div>
          <hr />

          {/* Ant Design Form */}
          <Form
            name="registerForm"
            layout="vertical"
            onFinish={handlesubmit}
          >
            {/* Row 1 */}
            <div className="form-row">
              <Form.Item
                name="loginId"
                rules={[{ required: true, message: "Please input your Login ID!" }]}
              >
                <div className="form-group">
                  <label>&nbsp;&nbsp; Login ID <span className="star">*</span></label>
                  <Input
                    className="width"
                    placeholder="Login ID"
                    onChange={(e) => setForm({ ...form, loginId: e.target.value })}
                  />
                </div>
              </Form.Item>

              <Form.Item
                name="firstName"
                rules={[{ required: true, message: "Please input your First Name!" }]}
              >
                <div className="form-group">
                  <label>&nbsp;&nbsp;First Name <span className="star">*</span></label>
                  <Input
                    className="width"
                    placeholder="First Name"
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                  />
                </div>
              </Form.Item>

              <Form.Item
                name="lastName"
                rules={[{ required: true, message: "Please input your Last Name!" }]}
              >
                <div className="form-group">
                  <label>&nbsp;&nbsp;Last Name <span className="star">*</span></label>
                  <Input
                    className="width"
                    placeholder="Last Name"
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                  />
                </div>
              </Form.Item>
            </div>

            {/* Row 2 */}
            <div className="form-row">
              <Form.Item
                name="country"
                rules={[{ required: true, message: "Please select your Country!" }]}
              >
                <div className="form-group">
                  <label>Country <span className="star">*</span></label>
                  <Select
                    className="width"
                    value={form.country}
                    onChange={(value) => setForm({ ...form, country: value })}
                  >
                    <Option value="us">United States</Option>
                    <Option value="in">India</Option>
                    <Option value="uk">United Kingdom</Option>
                  </Select>
                </div>
              </Form.Item>

              <Form.Item
                name="businessPhone"
                rules={[{ required: true, message: "Please input your Business Phone!" }]}
              >
                <div className="form-group">
                  <label>&nbsp;Business Phone <span className="star">*</span></label>
                  <div className="phone-input">
                    <span>+1</span>
                    <Input
                      className="width"
                      type="tel"
                      onChange={(e) => setForm({ ...form, businessPhone: e.target.value })}
                    />
                  </div>
                </div>
              </Form.Item>

              <Form.Item
                name="mobilePhone"
                rules={[{ required: true, message: "Please input your Mobile Phone!" }]}
              >
                <div className="form-group">
                  <label>Mobile Phone <span className="star">*</span></label>
                  <div className="phone-input">
                    <span>+1</span>
                    <Input
                      className="width"
                      type="tel"
                      onChange={(e) => setForm({ ...form, mobilePhone: e.target.value })}
                    />
                  </div>
                </div>
              </Form.Item>
            </div>

            {/* Row 3 */}
            <div className="form-row">
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your Email!" },
                  { type: "email", message: "Please enter a valid email!" },
                ]}
              >
                <div className="form-group">
                  <label>&nbsp;&nbsp;Email Address <span className="star">*</span></label>
                  <Input
                    className="width"
                    placeholder="Email Address"
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
              </Form.Item>

              <Form.Item
                name="companyName"
                rules={[{ required: true, message: "Please input your Company Name!" }]}
              >
                <div className="form-group">
                  <label>&nbsp;&nbsp;Company Name <span className="star">*</span></label>
                  <Input
                    className="width"
                    placeholder="Company Name"
                    onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                  />
                </div>
              </Form.Item>
            </div>

            {/* Row 4 - Password */}
            <div className="form-row">
              <Form.Item
                name="password"
                rules={[{ required: true, message: "Please input your Password!" }]}
              >
                <div className="form-group">
                  <label>&nbsp;&nbsp;Password <span className="star">*</span></label>
                  <Input.Password
                    className="width"
                    placeholder="Password"
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                  />
                </div>
              </Form.Item>

              <Form.Item
                name="confirmPassword"
                rules={[{ required: true, message: "Please confirm your Password!" }]}
              >
                <div className="form-group">
                  <label>&nbsp;&nbsp;Confirm Password <span className="star">*</span></label>
                  <Input.Password
                    className="width"
                    placeholder="Confirm Password"
                    onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                  />
                </div>
              </Form.Item>
            </div>

            {/* Captcha */}
            <div className="form-row">
              <Form.Item
                name="captcha"
                rules={[{ required: true, message: "Please enter the Captcha!" }]}
              >
                <div className="form-group">
                  <label>&nbsp;&nbsp;Captcha <span className="star">*</span></label>
                  <Input
                    className="width"
                    placeholder="Please enter captcha"
                    onChange={(e) => setForm({ ...form, captcha: e.target.value })}
                  />
                </div>
              </Form.Item>
              <div className="captcha-box">
                <span>L F x 4 5 Z</span>
                <button type="button">C</button>
              </div>
            </div>

            {/* Submit */}
            <div className="form-actions">
              <p className="loginback">Go back to <Link to="/login"> Login</Link></p>
              <Button type="primary" htmlType="submit" className="registerbutton">
                Register
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Register;
