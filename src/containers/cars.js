import React, { Component } from 'react';
import {connect} from 'react-redux';

import {carDetail,clearDetails} from '../actions';

import { bindActionCreators } from 'redux';



class Car extends Component{

    componentWillMount(){
        this.props.carDetail(this.props.match.params.id); 
    }
    componentWillUnmount(){
        this.props.clearDetails();
    }

    rernderDetail=({detail})=>{
            console.log(detail)
            if(detail){
                return detail.map((car)=>{
                    return(
                        <div key={car.id} className='car_details'>
                            <img src={`/images/${car.image}`} alt={car.brand}/>
                             <div className='content'>
                                <h2>{car.model}</h2>
                                <h4>{car.brand}</h4>
                                <p>{car.description}</p> 
                             </div>
                        </div>
                    )
                })
            }


    }

    render() {
        return( 
            <div className='detail_container'>
                {this.rernderDetail(this.props.carDetails)}
            </div>
        )
    }
}
function mapStateToProps(state){
    //console.log(state)
    return {
        carDetails : state.CarsReducers
    }
} 
function mapDispatchToProps(dispatch){

    return bindActionCreators({carDetail,clearDetails},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Car);
