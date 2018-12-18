import { combineReducers } from 'redux';

import CarsReducers from './car_reducer';

const rootreducers = combineReducers({
    CarsReducers,
});

export default rootreducers;