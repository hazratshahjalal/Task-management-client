import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand fw-semibold" href="/">
            TASK MANAGEMENT
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link border rounded fw-semibold text-white" href="/">
                  Manage Tasks
                </a>
              </li>
              <li className="nav-item ps-3">
                <a className="nav-link border rounded text-white fw-semibold " href="/addTask">
                  Add a Task
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default Navbar;
