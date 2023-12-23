import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from "../dashboard/LoginButton";
import LogoutButton from "../dashboard/LogoutButton";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

export const Header = () => {
  const { isAuthenticated, user } = useAuth0();
  const expand = "lg";
  console.log(isAuthenticated)
  /*
  const userName = user.name;
  const userEmail =


  useEffect(() => {
    
    if (isAuthenticated) {
      
      //console.log("Usuario autenticado:", user);
      //const userName = user.name;
      //const userEmail = user.email;
      //const userPicture = user.picture;
    }
  })
*/
  return (
    <>
      <Nav style={{ backgroundImage: "linear-gradient(to right, #1DDAB8, #2878B7)" }}>
        
        <Container className="flex justify-end gap-3 align-middle h-8">
          <NavLink className="text-white font-semibold">
            <Link to={"/certs"}>Verificar Certificado</Link>
          </NavLink>
          <a
          target="_blank"
            className="text-white font-semibold"
            href="https://site2.q10.com/login?ReturnUrl=%2F&aplentId=0959465f-37c3-4032-803b-bbfc499af7a3"
          >
            Aula virtual
          </a>
        </Container>
      </Nav>
      <Navbar expand={expand} className="shadow-md">
        <Container>
          <img className="h-10 mx-2" src="src\assets\IMG\binex-h.png"></img>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand-${expand}`}
              ></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-start flex-grow-1 pe-3 gap-2">
                <Nav.Link>
                  <Link to="/">Inicio</Link>
                </Nav.Link>
                <NavDropdown
                  title="Diplomados"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="#action3">
                    Diplomados
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">Cursos</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link>
                  <Link to={"/certs"}>Certificados</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to={"/Nosotros"}>Nosotros</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to={"/blog"}>Blog</Link>
                </Nav.Link>
              </Nav>
              <Nav className="flex justify-center align-middle">
                <div className="flex justify-start align-middle gap-4  mx-2">
                  <Link target="_blank" to={"https://www.facebook.com/ecomascyc/?locale=es_LA"} className="flex aling-middle justify-center">
                    <img src="src\assets\SVG\facebook.svg"></img>
                  </Link>
                  <Link target="_blank" to={"https://www.instagram.com/ecomas_cyc/"} className="flex aling-middle justify-center">
                    <img src="src\assets\SVG\instagram.svg"></img>
                  </Link>
                  <NavLink target="_black" to={"https://www.tiktok.com/@ecomascyc"} className="flex aling-middle justify-center">
                    <img src="src\assets\SVG\tiktok.svg"></img>
                  </NavLink>
                </div>
                <NavDropdown title="login">
                  <NavDropdown.Item>
                    <LoginButton/>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <LogoutButton/>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="font-bold uppercase"><Link to={"/students"}>administración</Link></NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
