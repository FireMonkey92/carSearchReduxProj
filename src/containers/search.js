import React, { Component } from 'react';

//Bring connect object from the react redux lib. to make connection between react and reduct actioncreator
import { connect } from 'react-redux';

// bring the specific actions from rootactons 
import { getCars } from '../actions';

//to bind redux action to the react app props
import {  bindActionCreators } from 'redux';


class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keywords: ''
        };
    }

    searchCars = (event) => {
        event.preventDefault();
        
        //call here the redux actions 
        this.props.getCars(this.state.keywords);
    }

    handleOnChange = (event) => {
        this.setState({
            keywords: event.target.value
        })
    }
    componentDidMount() {
        console.log(this.state.keywords);
    }


    render() {
        return (
            <div className='main_search'>
                <form onSubmit={this.searchCars}>
                    <input type='text' value={this.state.keywords} onChange={(e) => this.handleOnChange(e)} />
                </form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getCars },dispatch);
}

export default connect(null,mapDispatchToProps)(Search);