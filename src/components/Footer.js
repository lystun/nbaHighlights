import React from 'react';
import {Link} from 'react-router-dom';


const Footer = () => {
    return (
        <footer>
            <div className="flex-box-container">
                <div className="logo">
                    <span></span>
                    <Link to="/" >Home</Link>
                </div>
            </div>
        </footer>
    )
}


export default Footer