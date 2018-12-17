import React, { Component } from 'react';

// Components 
import Search from '../containers/search'
import ListOfCars from '../containers/list_of_cars'

class App extends Component {
  render() {
    return (
          <div className='App'>
              <div className='header'>
                <Search/>
                <ListOfCars/>
              </div>
          </div>
    );
  }
}
export default App;
