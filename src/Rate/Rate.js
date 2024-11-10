// import React from "react";

// import "./Rate.css";
// import Calk from "../Calk/Calk";
// class Rate extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       date: "",
//       currentcyRate: {},
//     };
//     this.currency = ["USD", "PLN", "UAH", "RUB"];
//     this.getRAte();
//   }
//   getRAte = () => {
//     fetch("https://v6.exchangerate-api.com/v6/6002608c77a860276500185d")
//       .then((data) => {
//         console.log(data.json());
//         return data.json();
//       })
//       .then((data) => {
//         console.log(data);
//         this.setState({ date: data.date });
//         let result = {};

//         for (let i = 0; i < this.currency.length; i++) {
//           result[this.currency[i]] = data.rates[this.currency[i]];
//         }
//         this.setState({ currentcyRate: result });

//         console.log(result);
//       });
//   };
//   render() {
//     return (
//       <div className="rate">
//         <h3 className="main_heading"> Kurs walut na {this.state.date}</h3>
//         <div className="flex_container">
//           {Object.keys(this.state.currentcyRate).map((keyName, i) => (
//             <div className="block flex_rate_item" key={keyName}>
//               <div className="currecny_item currency_name">{keyName}</div>
//               <div className="currecny_item currency_in">
//                 {this.state.currentcyRate[keyName].toFixed(2)}
//               </div>
//               {/* <div className="currecny_item currency_out">1200 Kr</div> */}
//               <p>*Za jedno EUR</p>
//             </div>
//           ))}
//         </div>

//         <Calk rate={this.state.currentcyRate}></Calk>
//       </div>
//     );
//   }
// }
// export default Rate;

import React from "react";

import "./Rate.css";
import Calk from "../Calk/Calk";
class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      currentcyRate: {},
    };
    this.currency = ["USD", "PLN", "UAH", "RUB"];
    this.getRAte();
  }
  getRAte = () => {
    fetch(
      "https://v6.exchangerate-api.com/v6/6002608c77a860276500185d/latest/EUR"
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok");
      })

      .then((data) => {
        console.log(data.conversion_rates);
        let result = {};

        for (let i = 0; i < this.currency.length; i++) {
          result[this.currency[i]] = data.conversion_rates[this.currency[i]];
        }
        this.setState({ currentcyRate: result });

        console.log(result);
      });
  };

  render() {
    return (
      <div className="rate">
        <h3 className="main_heading"> Kurs walut na {this.state.date}</h3>
        <div className="flex_container">
          {Object.keys(this.state.currentcyRate).map((keyName, i) => (
            <div className="block flex_rate_item" key={keyName}>
              <div className="currecny_item currency_name">{keyName}</div>
              <div className="currecny_item currency_in">
                {this.state.currentcyRate[keyName].toFixed(2)}
              </div>
              {/* <div className="currecny_item currency_out">1200 Kr</div> */}
              <p className="curencyDesription">*Za jedno EUR</p>
            </div>
          ))}
        </div>

        <Calk rate={this.state.currentcyRate}></Calk>
      </div>
    );
  }
}
export default Rate;
