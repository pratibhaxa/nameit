import React from "react";
import HeaderImage from './HeaderImage.png';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="head-container">
                <img 
                    src={HeaderImage} 
                    alt="HeaderImage"
                    className="head-image"
                />
                <h1 className="head-text">{this.props.headTitle}</h1>
            </div>
        )
    }
}

export default Header;