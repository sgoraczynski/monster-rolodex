import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component'

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
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
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );  //we destructure state props to names
        //in new var we call filter on monsters array, on each monster name we check
        //if it includes what is in searchField
        //PS we lowerCase everything to simplify the process


    return (
      <div className='App'>
        <SearchBox
          placeholder='search monsters'
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={ filteredMonsters } />
      </div>
    );
  }
}

export default App;
