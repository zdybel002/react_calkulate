import "./App.css";
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Routes,
} from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Rate from "./Rate/Rate";
import About from "./About/About";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="div_app">
        <Header></Header>
        <main>
          <div className="container ">
            <Router>
              <Switch>
                <Route exact path="/" component={Rate} />
                <Route exact path="/about" component={About} />
              </Switch>
            </Router>

            <div className="site_content">
              <div className="site_description">
                Na tej stronie zbiramy cookie dla zbioru informacji, za pomocą
                którego tworzymy ip-adreesy waszego regiona
              </div>
              <button className="btm btm_primery btm_sm">Ok</button>
            </div>
          </div>
        </main>

        <Footer></Footer>
      </div>
    );
  }
}
export default App;
