import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement(
    "div",
    {
      className: "container"
    },
    React.createElement("h1", {}, "Pet Adoption App!"),
    React.createElement(Pet, {
      name: "Rocky",
      animal: "Dog",
      breed: "Labrador"
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Parrot"
    }),
    React.createElement(Pet, {
      name: "Doink",
      animal: "Cat",
      breed: "Mixed"
    }),
    React.createElement(Pet, {
      name: "Pappu",
      animal: "Dog",
      breed: "Mixed"
    })
  );
};

render(React.createElement(App), document.getElementById("root"));
