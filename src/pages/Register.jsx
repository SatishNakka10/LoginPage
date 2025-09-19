// src/pages/Register.jsx
import React, { useState } from "react";
import { register } from "../features/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from '../assets/Horselogo.png';

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

  const handlesubmit = (e) => {
    e.preventDefault();
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
        <form onSubmit={handlesubmit}>
          {/* Row 1 */}
          <div className="form-row">
            <div className="form-group">
              <label>
                &nbsp;&nbsp; Login ID <span className="star">*</span>
              </label>
              <input
                type="text"
                placeholder="Login ID"
                required
                onChange={(e) =>
                  setForm({ ...form, loginId: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>
                &nbsp;&nbsp;First Name <span className="star">*</span>
              </label>
              <input
                type="text"
                placeholder="First Name"
                required
                onChange={(e) =>
                  setForm({ ...form, firstName: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>
                &nbsp;&nbsp;Last Name <span className="star">*</span>
              </label>
              <input
                type="text"
                placeholder="Last Name"
                required
                onChange={(e) =>
                  setForm({ ...form, lastName: e.target.value })
                }
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="form-row">
            <div className="form-group">
              <label>
                Country <span className="star">*</span>
              </label>
              <select
                onChange={(e) => setForm({ ...form, country: e.target.value })}
              >
                <option value="us">United States</option>
                <option value="in">India</option>
                <option value="uk">United Kingdom</option>
              </select>
            </div>
            <div className="form-group">
              <label>
                &nbsp;Business Phone <span className="star">*</span>
              </label>
              <div className="phone-input">
                <span>+1</span>
                <input
                  type="tel"
                  required
                  onChange={(e) =>
                    setForm({ ...form, businessPhone: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="form-group">
              <label>
                Mobile Phone <span className="star">*</span>
              </label>
              <div className="phone-input">
                <span>+1</span>
                <input
                  type="tel"
                  required
                  onChange={(e) =>
                    setForm({ ...form, mobilePhone: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="form-row">
            <div className="form-group">
              <label>
                &nbsp;&nbsp;Email Address <span className="star">*</span>
              </label>
              <input
                type="email"
                placeholder="Email Address"
                className="width"
                required
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>
                &nbsp;&nbsp;Company Name <span className="star">*</span>
              </label>
              <input
                type="text"
                placeholder="Company Name"
                className="width"
                required
                onChange={(e) =>
                  setForm({ ...form, companyName: e.target.value })
                }
              />
            </div>
          </div>

          {/* Row 4 */}
          <div className="form-row">
            <div className="form-group">
              <label>
                &nbsp;&nbsp;Password <span className="star">*</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="width"
                required
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>
                &nbsp;&nbsp;Confirm Password <span className="star">*</span>
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="width"
                required
                onChange={(e) =>
                  setForm({ ...form, confirmPassword: e.target.value })
                }
              />
            </div>
          </div>

          {/* Captcha */}
          <div className="form-row">
            <div className="form-group">
              <label>
                &nbsp;&nbsp;Captcha <span className="star">*</span>
              </label>
              <input
                type="text"
                placeholder="Please enter captcha"
                className="width"
                required
                onChange={(e) =>
                  setForm({ ...form, captcha: e.target.value })
                }
              />
            </div>
            <div className="captcha-box">
              <span>L F x 4 5 Z</span>
              <button type="button">C</button>
            </div>
          </div>

          {/* Submit */}
         
          <div className="form-actions">
              <p className="loginback">Go back to<Link to="/login"> Login</Link></p>  
            <button type="submit" className="registerbutton">
              Register
            </button>
          </div>
        </form>
      </div>
      </div>
    </>
  );
};

export default Register;
