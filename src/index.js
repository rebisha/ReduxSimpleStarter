import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import Container from './sxa/Container';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_detail';
import SimpleMap from './components/map';
import Forms from './components/form';

import 'bootstrap';
import './scss/creative.scss';

const API_KEY = 'AIzaSyCCO1ojuipmZnrWThF9kV1_lSCHIZ83Lok';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            selectedVideo: null,
            videos: [] 
        }; 
        
        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            // instead of printing the objects in console we are passing the values of search to videos so that it gets updated once the search has kicked off
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0] 
            }); 
        });
    }
    
    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
        return (
            <Container-fluid>
                <div className="container mb-5">
                    <SearchBar onSearchTermChange={videoSearch} />
                    <VideoDetails video={this.state.selectedVideo} />
                    <VideoList 
                        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                        videos={this.state.videos} 
                    />
                </div>
            

            <div className="container mb-5">
                <Forms />
            </div>

            <div>                    
                <SimpleMap />                
            </div>
            </Container-fluid>
        );  
    }     
}

// we're telling react to render a function called App.
ReactDOM.render(<App />, document.getElementById('root'));
