import React from "react";

import "./Footer.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer id="footer" className="footer">
        <div className="footer_bottom">
          <div className="footer_container">
            <div className="flex_item">
              <h1 className="footer_title">
                <a href="#" className="footer_heading">
                  2019 React Lite Level
                </a>
              </h1>
              <small className="footer_desription">All Rights Reserved</small>
            </div>

            <div className="flex_item">
              <div className="module_body">
                <ul className="list_unstyled">
                  <li>
                    <a href="/sitemape/">Mapa strony</a>
                  </li>
                  <li>
                    <a href="/sitemape/">Google Sitmap</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex_item">
              <div className="module_body">
                <ul className="list_unstyled">
                  <li>
                    <a href="/contact/"> Kontakty</a>
                  </li>
                  <li>
                    <a href="/contact/"> Gwarancaja</a>
                  </li>
                  <li>
                    <a href="/contact/"> O serwisie</a>
                  </li>
                  <li>
                    <a href="/contact/"> Zwroty</a>
                  </li>
                  <li>
                    <a href="/contact/"> Zgoda uzytkownika</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* <div className="copyrigth_bar">
              <div className="flex_container">
                <div className="flex_item">
                  <ul className="link"></ul>
                </div>
                <div className="flex_item">
                  <div className="clearfix paymend_methods">
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
