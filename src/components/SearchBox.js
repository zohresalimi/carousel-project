import React from 'react';

import './SearchResult.css';
function SearchBox(props) {
    return (
        <div className="input-wrapper">
            <input id="realbox" type="search" placeholder="Search"></input>
        </div>
    );
}

export default SearchBox;