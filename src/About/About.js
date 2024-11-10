import React from "react";

import "./About.css";

class About extends React.Component {
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
    return <div>Lorem impsum duzo nowego teksstu</div>;
  }
}
export default About;
