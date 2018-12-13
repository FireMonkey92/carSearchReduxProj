import React, { Component } from 'react';


class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keywords: ''
        };
    }


    searchCars = (event) => {
        event.preventDefault();
        console.log(this.state.keywords);
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

export default Search;