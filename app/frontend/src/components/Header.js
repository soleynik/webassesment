import React, { Component } from 'react';
import Login from './Login';

class Header extends Component {
    render(){
        return (
            <div className="header">


                <div className="top-logo"><img className="shrpas-img" src="./shrpas.jpg" alt=""/></div>

                <div className="top-logo"><img className="avatar-image"  src="./avatar.png" alt=""/></div>
                    {$imgsmPreview}

            </div>
        );
    }
}

export default Header;
