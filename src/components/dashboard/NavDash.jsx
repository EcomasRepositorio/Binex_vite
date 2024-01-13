import React from "react";
import { Link } from "react-router-dom";

const NavDash = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          <Link to="/">
            {" "}
            <span>
              <img
                src="src\assets\IMG\home.webp"
                style={{ filter: "invert()", width: "50px" }}
              ></img>
            </span>
          </Link>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link to="/students" class="nav-link" href="#">
                Estudiantes
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Cursos
              </a>
            </li>
            <li class="nav-item">
              <Link to="/Forms" class="nav-link" href="#">
                Forms
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavDash;
