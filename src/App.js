import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: ""
    };
  }

  onSearchChange = e => {
    this.setState({ searchfield: e.target.value });
  };

  render() {
    const filterRobots = this.state.robots.filter(robot => {
      return robot.username
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">Robofriends</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList robots={filterRobots} />;
      </div>
    );
  }
}

export default App;
