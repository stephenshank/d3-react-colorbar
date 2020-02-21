import React from "react";
import ReactDOM from "react-dom";
import { scaleLinear } from "d3-scale";
import { BrowserRouter, Route, NavLink, Switch} from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Colorbar from "../src/d3-react-colorbar.jsx";

import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (<Navbar bg="light">
    <NavLink to="/" className="navbar-brand">
      D3-React-Colorbar
    </NavLink>
  </Navbar>);
}

function ColorbarExample() {
  const scale = scaleLinear()
    .domain([0, 10])
    .range([0, 300]);
  return (<svg width={100} height={500}>
    <Colorbar scale={scale} translateX={50} translateY={50} />
  </svg>)
}

function Home() {
  return (<div>
    <h1>Home</h1>
    <ColorbarExample />
  </div>);
}

ReactDOM.render(
  <BrowserRouter>
    <div>
      <NavBar />
      <div style={{ maxWidth: 1140 }} className="container-fluid">
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  </BrowserRouter>,
  document.body.appendChild(document.createElement("div"))
);
