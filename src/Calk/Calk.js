import React from "react";

import "./Calk.css";

class Calk extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
  }

  static getDerivedStateFromProps(props, state) {
    return { rate: props.rate };
  }
  calkRate = (e) => {
    e.preventDefault();
    // console.log("Work");
    let elements = e.target.elements;
    // console.log(elements);

    let countCurency = elements["cout_currency"].value;
    let typeCurency = elements["type_curency"].value;
    console.log(countCurency);
    console.log(typeCurency);
    this.setState({
      result: (countCurency / this.state.rate[typeCurency]).toFixed(2),
    });
  };
  render() {
    return (
      <div>
        <h3 className="second_heding">Kalkulator wymiany</h3>
        <div className="calcContainer">
          <div>Ja chce </div>
          <div>
            <form onSubmit={this.calkRate}>
              <input type="number" defaultValue="150" name="cout_currency" />{" "}
              <select name="type_curency" id="">
                {Object.keys(this.props.rate).map((keyName) => (
                  <option key={keyName} value={keyName}>
                    {keyName}
                  </option>
                ))}
              </select>
              <input type="submit" defaultValue="calk" />
            </form>
          </div>
          <div>
            <h4>Rezultat</h4>
            <ul className="calc_res">
              <li>EUR {this.state.result}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Calk;
