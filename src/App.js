import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Pradeep",
          id:"1acwssc"
        },
        {
          name: "jack",
          id:"2acwssc"
        },
        {
          name: "raj",
          id:"3acwssc"
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return  <div key={ monster.id}>  <h1> {monster.name}</h1></div>;

        })}
      </div>
    );
  }
}

export default App;
