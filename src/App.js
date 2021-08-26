import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  } //we fetch users from web, we translate it via json so js can understand  it,
    // and we take fetched users and setState of monsters array, to become
    // a users array hahah lol xd, so easy...


  render() {
    return (
      <div className='App'>
        {this.state.monsters.map(monster => (
            <h1 key={monster.id}> {monster.name} </h1>
            )
          )
        }
      </div>
    );
  }
}

export default App;
