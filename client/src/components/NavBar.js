import React, { useContext } from "react";
import { Context } from "..";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";
import { Button, Nav } from "react-bootstrap";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {

  const { user } = useContext(Context);
  return (
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
            I-SHOP
          </NavLink>
          {user.isAuth ? (
            <Nav className="ml-auto" style={{ color: "white" }}> 
              <Button variant={"outline-light"}>Адмін панель</Button>
              <Button variant={"outline-light"} className="ms-2">Вхід</Button>
              </Nav>
          ) : (
            <Nav className="ml-auto" style={{ color: "white" }}>
              <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизація</Button>
            </Nav>
          )}
        </Container>
      </Navbar>
  );
});

export default NavBar;
