import React, { Component } from 'react';

// this is a class component
class SearchBar extends Component { 
    constructor(props) {
        // Component has its own pair of constructor, so with super(props) we're just calling the parent methods (parent = component) 
        super(props); 

        // whenever you use state initialize it by creating a new object and assign it to 'this.state'. term is a property name and you can use any other name
        this.state = { term: ''}; 
    }
    render() {
        return (
            <div className="search-bar">
                <input 
                value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)} />
            </div>
        ); 
    } 

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

// any component that imports Searchbar in our application will get our SearchBar component because of this line.
export default SearchBar;