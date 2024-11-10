import "./Header.css";
import React from "react";

import Nav from "../Nav/Nav";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="site">
        <header className="header">
          <div className="container container_header">
            <h1 className="site-title">React Lite Level</h1>
          </div>
        </header>
        <header className="second_header">
          <div className="container_header header_menu">
            <Nav></Nav>
          </div>
        </header>
      </div>
    );
  }
}
export default Header;
