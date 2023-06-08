import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
function Header() {
  return (
    <div>
      <Navbar/>
      <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Welcome To Hotel Black Sun</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">AboutUs</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Restaurant 
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Mains</a></li>
            <li><a class="dropdown-item" href="#">Desserts</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="#">Drinks</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Hotel</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Facility</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">ContactUs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Restaurant </a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header