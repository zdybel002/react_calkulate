import "./Nav.css";
import React from "react";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="site">
        <nav>
          <ul className="navList">
            <li className="navItem">
              <a href="/" className="navLink">
                Głowna
              </a>
            </li>
            <li className="navItem">
              <a href="/about" className="navLink">
                O nas
              </a>
            </li>
            {/* <li className="navItem">
              <a href="#" className="navLink">
                Kontakty
              </a>
            </li> */}
          </ul>
        </nav>
      </div>
    );
  }
}
export default Nav;
