import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { logout } from "../../store/slices/AuthSlice";
import { useDispatch } from "react-redux";

export default function Navbar() {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
      <Link className="navbar-brand" to={"/"}>
        Navbar
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to={"/"}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/products"}>
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/about"}>
              About
            </Link>
          </li>
          {token ? (
            <li onClick={() => dispatch(logout())} className="nav-item">
              <span className="nav-link">Logout</span>
            </li>
          ) : (
            <li className="nav-item">
              <Link className="nav-link" to={"/login-register"}>
                Login/Register
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
