import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar bg="secondary" variant="danger">
        <Container>
          <div>
            <img
              src="https://bootcamp.makers.kg/assets/img/makers_logo.svg"
              alt="Makers"
              width={150}
              height={150}
            />
          </div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Navbar.Brand>Домашняя страница</Navbar.Brand>
          </Link>
          <Link to="/add" style={{ textDecoration: "none" }}>
            <Navbar.Brand>Добавление участника</Navbar.Brand>
          </Link>
          <Link to="/team" style={{ textDecoration: "none" }}>
            <Navbar.Brand>Команда</Navbar.Brand>
          </Link>
          <Link to="/aboutus" style={{ textDecoration: "none" }}>
            <Navbar.Brand>О нас</Navbar.Brand>
          </Link>
          <Link to="/contacts" style={{ textDecoration: "none" }}>
            <Navbar.Brand>Контакты</Navbar.Brand>
          </Link>
          <Link to="/favorites" style={{ textDecoration: "none" }}>
            <Navbar.Brand>Избранное</Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default Home;
