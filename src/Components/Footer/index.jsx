import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="shadow-lg  p-3 mb-5 bg-white rounded">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <Link to={'/'} className="nav-link px-2 text-body-secondary">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/products'} className="nav-link px-2 text-body-secondary">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/about'} className="nav-link px-2 text-body-secondary">
              About
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/login'} className="nav-link px-2 text-body-secondary">
                Login
              </Link>
            </li>
          </ul>
          <p className="text-center text-body-secondary">© 2023 Company, Inc</p>
        </footer>
      </div>
    </>
  );
}
