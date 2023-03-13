import React from "react";
import Card from "react-bootstrap/Card";

const UsersCard = ({ item }) => {
  return (
    <div>
      <Card
        style={{
          width: "18rem",
          textAlign: "center",
          backgroundColor: "beige",
          border: "3px solid silver",
        }}
      >
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.surname}</Card.Text>
          <Card.Title>{item.status}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UsersCard;
