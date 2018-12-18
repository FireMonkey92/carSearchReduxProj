import React from 'react';
import ReactDOM from 'react-dom';

//Setting up the redux in App
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import promiseMiddleware from 'redux-promise'

//Reducers
import reducers from './reducers'
import './app.css';
// Components 
import App from './components/App';
import Car from './containers/cars';

//Create a store with middleware that accepts two args on is createStore
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Route exact path='/' component={App}></Route>
                <Route exact path='/car/:id' component={Car}></Route>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
