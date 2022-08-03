import React from "react";
import './SearchBox.css'

class SearchBox extends React.Component {
    render() {
        return(
            <div className="search-container">
                <input
                    onChange={() => console.log} 
                    placeholder="Type Keywords" 
                    className="search-input" 
                />
            </div>
        )
    }
}

export default SearchBox;

