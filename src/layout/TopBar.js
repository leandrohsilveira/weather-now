import React from 'react';

import logo from './logo.svg';
import './TopBar.css';

const TopBar = (props) => (
    <header className="TopBar-header">
        <div className="TopBar-content">
            <img className="TopBar-logo" src={logo} alt="WeatherNow Logo" />
        </div>
    </header>
);

export default TopBar;