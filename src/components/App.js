import React, { Component } from 'react';

// Components 

import Search from '../containers/search'
class App extends Component {
  render() {
    return (
          <div className='App'>
              <div className='header'>
                <Search/>
              </div>
          </div>
    );
  }
}
export default App;
