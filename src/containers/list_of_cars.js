import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ListOfCars extends Component {

    renderList = ({ cars }) => {
        console.log(cars)
        if (cars) {
            return cars.map((car) => {
                return (
                    <Link key={car.id} to={`/car/${car.id}`} className='car_item'>
                            <div className='left'>
                                <img src={`/images/${car.image}`} alt={car.model} />
                            </div>
                            <div className='right'>
                                <h4>{car.model}</h4>
                                <h6>{car.brand}</h6>
                            </div> 
                    </Link>
                )
            });
        }
    }
    render() {
        return (
            <div className='cars_container'>
                {this.renderList(this.props)}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cars: state.CarsReducers
    }
}

export default connect(mapStateToProps, null)(ListOfCars);