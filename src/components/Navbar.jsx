import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/authSlice'
import { Link, useLocation } from 'react-router-dom'  // 👈 import useLocation

export default function Navbar() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.user)
  const location = useLocation() // 👈 get current path

  return (
    <nav style={{ padding: '10px', background: '#f1f1f1', display: 'flex', gap: 12 }}>
      {!user && (
        <Link to="/login">
          <button
            className={`loginbtn ${location.pathname === "/login" ? "active" : ""}`}
          >
            Login
          </button>
        </Link>
      )}
      {!user && (
        <Link to="/register">
          <button
            className={`registerbtn ${location.pathname === "/register" ? "active" : ""}`}
          >
            Register
          </button>
        </Link>
      )}
      {user && (
        <Link to="/dashboard">
          <button className="dashboardbtn">Dashboard</button>
        </Link>
      )}
      {user && (
        <button className="logoutbtn" onClick={() => dispatch(logout())}>
          Logout
        </button>
      )}
    </nav>
  )
}
