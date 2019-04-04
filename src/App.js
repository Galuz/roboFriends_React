import React, { Component } from 'react';
import CardList from './robots_proyect/CardList';
import {robots} from './robots_proyect/robots';
import SearchBox from './robots_proyect/SearchBox';

import './App.css';

class App extends Component {
  
// componentDidMount(){
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => {response.toJson();})
//   .then(users => {this.setState({robots : users})});
// }
  constructor(){
    super();
    this.state = {
      robots : {},
      searchField: ''
    }
  }
  render() {
    const funcionPadre = (event) => {
      this.setState({searchField : event.target.value.toLocaleLowerCase()})
    };
    const filteredRobots = robots.filter(robot => {
      const robotName = robot.username.toLocaleLowerCase();
      return robotName.includes(this.state.searchField.toLocaleLowerCase());
    });
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={funcionPadre}/>
        {/* <CardList robots={robots}/> */}
        <CardList robots={filteredRobots}/>
      </div>
    );
  }
}

export default App;
