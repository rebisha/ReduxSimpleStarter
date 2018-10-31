import React, { Component } from 'react';

// this is a class component
class SearchBar extends Component { 
    constructor(props) {
        // Component has its own pair of constructor, so with super(props) we're just calling the parent methods (parent = component) 
        super(props); 

        // whenever you use state initialize it by creating a new object and assign it to this.state. term is a property name and you can use any other name
        this.state = { term: ''}; 
    }
    render() {
        return (
            <div>
                <input onChange={event => this.setState({ term: event.target.value })} />
                Value of the input: {this.state.term}
            </div>
        ); 
    } 
}

export default SearchBar; // any component that imports Searchbar in our application will get our SearchBar component because of this line.


/* this is a function component
    const SearchBar = () => {  
        return <input />;
    }; 
*/