import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div className="container">
      <h1 className="text-dark">Pet Adoption App!</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
