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

function Example(props) {
  const border_style = {
    border: "solid",
    borderWidth:1,
    borderColor: "LightGrey"
  };
  return (<div>
    <svg width={100} height={500}>
      {props.children}
    </svg>
  </div>)
}

function VerticalBarLeftAxisExample() {
  const scale = scaleLinear()
    .domain([0, 10])
    .range([0, 300]);
  return (<Example>
    <Colorbar
      scale={scale}
      translateX={50}
      translateY={50}
      colorRange={['orange', 'purple']}
    />
  </Example>);
}

function Home() {
  return (<div>
    <h1>Home</h1>
    <VerticalBarLeftAxisExample />
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
