import React from "react";
import UsersCard from "./UsersCard";

let users = [
  {
    name: "Антон",
    surname: "Ше",
    image:
      "https://cdn.shopify.com/s/files/1/0255/3184/2642/products/autocollant-licorne-qui-dab-licorne-1_1282x.jpg?v=1643415974",
    status: "Ментор",
    id: 1,
  },
  {
    name: "Саламат",
    surname: "Кадыров",
    image:
      "https://cdn.shopify.com/s/files/1/0255/3184/2642/products/autocollant-licorne-qui-dab-licorne-1_1282x.jpg?v=1643415974",
    status: "Team лидер",
    id: 2,
  },
  {
    name: "Байыш",
    surname: "Кадыров",
    image:
      "https://cdn.shopify.com/s/files/1/0255/3184/2642/products/autocollant-licorne-qui-dab-licorne-1_1282x.jpg?v=1643415974",
    status: "Трекер",
    id: 3,
  },
  {
    name: "Жаннат",
    surname: "Кадыров",
    image:
      "https://cdn.shopify.com/s/files/1/0255/3184/2642/products/autocollant-licorne-qui-dab-licorne-1_1282x.jpg?v=1643415974",
    status: "Трекер",
    id: 4,
  },
  {
    name: "Мырзайым",
    surname: "Максатбекова",
    image:
      "https://cdn.shopify.com/s/files/1/0255/3184/2642/products/autocollant-licorne-qui-dab-licorne-1_1282x.jpg?v=1643415974",
    status: "Куратор",
    id: 5,
  },
];

const Users = () => {
  return (
    <div>
      <div className="d-flex justify-content-between mt-5 ms-5">
        {users.map((item) => (
          <UsersCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Users;
