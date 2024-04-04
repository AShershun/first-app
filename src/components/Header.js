import React from "react";
import '../styles/header.css';


class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='header'>
                <div className="header_wrapper">
                    <div className="navbar">
                        <div className="navbar_item">Home</div>
                        <div className="navbar_item">Login</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;