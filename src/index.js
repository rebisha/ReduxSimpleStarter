import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_detail';

const API_KEY = 'AIzaSyCCO1ojuipmZnrWThF9kV1_lSCHIZ83Lok';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] }; // videos is a state of type array as it will have a list of videos/data
        
        YTSearch({key: API_KEY, term: 'cartoons'}, (videos) => {
            this.setState({ videos }); // instead of printing the objects in console we are passing the values of search to videos so that it gets updated once the search has 
                                        // kicked off
        });
    }
    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetails video={this.state.videos[0]} />
                <VideoList videos={this.state.videos}/>
            </div>
        );  
    }     
}

// we're telling react to render a function called App.
ReactDOM.render(<App />, document.querySelector('.container'));