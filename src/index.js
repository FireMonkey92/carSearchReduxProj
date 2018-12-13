import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';


import './app.css';

// Components 
import App from './components/App';
import Car from './components/cars';

ReactDOM.render(
        <BrowserRouter>
        <div>
            <Route exact path='/' component={App}></Route>
            <Route exact path='/car/:id' component={Car}></Route>
        </div>
        </BrowserRouter>
      , document.getElementById('root'));
