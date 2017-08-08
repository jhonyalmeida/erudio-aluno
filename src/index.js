import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import SearchBar from './VideoPlayer/SearchBar';
import registerServiceWorker from './registerServiceWorker';

import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyDdIgQtCn7BUvSP00zh5WlhL2TjuPKLCwc';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { videos: [] };      

        YTSearch({key: API_KEY, term: 'testing'}, (videos) => {
            this.setState({ videos });
        });
    }
    
    render() {
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
