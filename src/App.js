import React, { useState } from "react";
import { render } from "react-dom";
import { Router, Link } from '@reach/router';
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from './ThemeContext';

const App = () => {
  const themeHook = useState('darkblue');
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div className="container">
          <header>
            <Link to="/">
              <h1>Pet Adoption App!</h1>
            </Link>
          </header>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
